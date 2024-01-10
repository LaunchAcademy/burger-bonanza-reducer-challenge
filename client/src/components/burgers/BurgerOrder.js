import React, { useReducer } from "react"

import orderReducer from "../../reducers/orderReducer"

import BurgerForm from "./BurgerForm"
import OrderSummary from "./OrderSummary"

const BurgerOrder = (props) => {
  const [order, dispatch] = useReducer(orderReducer, [])

  const addBurgerToOrder = (newBurger) => {
    dispatch({
      type: "addBurger",
      newBurger: newBurger
    })
  }

  return (
    <div className="grid-container">
      <h1 className="text-center">Place your order</h1>
      <div className="grid-x grid-margin-x">
        <BurgerForm addBurgerToOrder={addBurgerToOrder} />
        <OrderSummary order={order} />
      </div>
    </div>
  )
}

export default BurgerOrder