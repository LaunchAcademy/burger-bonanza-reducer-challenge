import React, { useReducer } from "react"

import burgerReducer from "../../reducers/burgerReducer"

import OptionCollection from "./OptionCollection"

const BurgerForm = (props) => {
  const initialOrder = {
    type: "",
    toppings: [],
    isGlutenFree: "",
    side: ""
  }
  const [order, dispatch] = useReducer(burgerReducer, initialOrder)

  const handleChange = (event) => {
    dispatch({
      type: "orderChange",
      name: event.currentTarget.name,
      value: event.currentTarget.value
    })
  }

  const handleCheckChange = (event) => {
    dispatch({
      type: "orderCheckboxChange",
      value: event.currentTarget.value
    })
  }

  const clearForm = () => {
    dispatch({
      type: "resetOrderForm",
      initialOrder: initialOrder
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(order)
    clearForm()
  }

  const burgerTypes = ["", "medium rare", "medium", "medium well", "well done", "chicken", "vegan"]
  const sides = ["", "fries", "potatoes", "salad", "veggies"]

  const toppings = ["cheese", "pickles", "onions", "lettuce"]
  const toppingOptions = toppings.map((topping) => {
    return (
      <label key={topping} htmlFor={topping}>
        <input
          id={topping}
          type="checkbox"
          value={topping}
          checked={order.toppings.includes(topping)}
          onChange={handleCheckChange}
        />
        {topping}
      </label>
    )
  })

  return (
    <div className="callout">
      <h3>Burger Order</h3>
      <form onSubmit={handleSubmit} className="callout primary">
        <label htmlFor="type">Type of Burger
          <select
            id="type"
            name="type"
            value={order.type}
            onChange={handleChange}
          >
            <OptionCollection options={burgerTypes} />
          </select>
        </label>

        <div className="callout">
          <p>Toppings</p>
          {toppingOptions}
        </div>

        <div className="callout">
          <p>Type of Roll</p>
          <label htmlFor="hawaiian">
            <input 
              type="radio"
              id="hawaiian"
              name="isGlutenFree"
              value="false"
              checked={order.isGlutenFree === "false"}
              onChange={handleChange}
            />
            Hawaiian Roll
          </label>

          <label htmlFor="gluten-free">
            <input 
              type="radio"
              id="gluten-free"
              name="isGlutenFree"
              value="true"
              checked={order.isGlutenFree === "true"}
              onChange={handleChange}
            />
            Gluten-Free Roll
          </label>
        </div>

        <label htmlFor="side">Sides
          <select
            id="side"
            name="side"
            value={order.side}
            onChange={handleChange}
          >
            <OptionCollection options={sides} />
          </select>
        </label>

        <div className="button-group">
          <input type="submit" value="Place Order" className="button" />
          <button type="button" onClick={clearForm} className="button alert">Clear Form</button>
        </div>
      </form>
    </div>
  )
}

export default BurgerForm