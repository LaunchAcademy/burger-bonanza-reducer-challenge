import React from "react"

import BurgerTile from "./BurgerTile"

const OrderSummary = (props) => {
  const summary = props.order.map((burger, index) => {
    return (
      <BurgerTile
        key={index}
        {...burger}
      />
    )
  })

  const submitOrder = () => {
    console.log(props.order)
  }

  return (
    <div className="cell medium-6 callout">
      <h3 className="text-center">Order Summary</h3>
      {props.order.length > 0 ? (
        <>
          <div className="callout secondary">
            {summary}
          </div>

          <div className="button-group align-center">
            <button type="button" onClick={submitOrder} className="button">Submit order</button>
          </div>
        </>
        ) : <h5 className="text-center">Build your burger to place an order</h5>}
    </div>
  )
}

export default OrderSummary