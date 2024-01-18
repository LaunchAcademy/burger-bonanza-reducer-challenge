import React, { useReducer } from "react";

import postBurgerOrder from "../../apiClient/postBurgerOrder";
import confirmationReducer from "../../reducers/confirmationReducer";
import orderReducer from "../../reducers/orderReducer";

import BurgerForm from "./BurgerForm";
import OrderSummaryForm from "./OrderSummaryForm";

const BurgerOrder = (props) => {
  const initialOrder = {
    name: "",
    burgers: [],
  };
  const [order, orderDispatch] = useReducer(orderReducer, initialOrder);
  const [orderConfirmation, confirmationDispatch] = useReducer(confirmationReducer, false);

  const addNameToOrder = (orderName) => {
    orderDispatch({
      type: "addName",
      name: orderName,
    });
  };

  const addBurgerToOrder = (newBurger) => {
    orderDispatch({
      type: "addBurger",
      newBurger: newBurger,
    });
  };

  const submitBurgerOrder = async (burgerOrder) => {
    const returnedBurger = await postBurgerOrder(burgerOrder);
    if (returnedBurger.order) {
      // setOrderConfirmation(true);
      confirmationDispatch({ type: "orderConfirmed" });
      orderDispatch({
        type: "resetOrder",
        initialOrder,
      });
    }
  };

  return (
    <div className="grid-container">
      <h1 className="text-center">Place your order</h1>
      {orderConfirmation ? <h5 className="callout success">Your order has been placed!</h5> : null}
      <div className="grid-x grid-margin-x">
        <BurgerForm
          addBurgerToOrder={addBurgerToOrder}
          addNameToOrder={addNameToOrder}
          orderName={order.name}
        />
        <OrderSummaryForm order={order} submitBurgerOrder={submitBurgerOrder} />
      </div>
    </div>
  );
};

export default BurgerOrder;
