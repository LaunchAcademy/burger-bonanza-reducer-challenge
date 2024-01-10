import React, { useReducer } from "react"

import burgerReducer from "../../reducers/burgerReducer"

import OptionCollection from "./OptionCollection"

const BurgerForm = (props) => {
  const initialBurger = {
    type: "",
    toppings: [],
    isGlutenFree: "",
    side: ""
  }
  const [burger, dispatch] = useReducer(burgerReducer, initialBurger)

  const handleChange = (event) => {
    dispatch({
      type: "burgerChange",
      name: event.currentTarget.name,
      value: event.currentTarget.value
    })
  }

  const handleCheckChange = (event) => {
    dispatch({
      type: "burgerCheckboxChange",
      value: event.currentTarget.value
    })
  }

  const clearForm = () => {
    dispatch({
      type: "resetBurgerForm",
      initialBurger: initialBurger
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addBurgerToOrder(burger)
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
          checked={burger.toppings.includes(topping)}
          onChange={handleCheckChange}
        />
        {topping}
      </label>
    )
  })

  return (
    <div className="cell medium-6 callout">
      <h3 className="text-center">Burger Order</h3>
      <form onSubmit={handleSubmit} className="callout primary">
        <label htmlFor="type">Type of Burger
          <select
            id="type"
            name="type"
            value={burger.type}
            onChange={handleChange}
          >
            <OptionCollection options={burgerTypes} />
          </select>
        </label>

        <div className="grid-x grid-margin-x">
          <div className="cell small-6 callout">
            <p>Toppings</p>
            {toppingOptions}
          </div>

          <div className="cell small-6 callout">
            <p>Type of Roll</p>
            <label htmlFor="hawaiian">
              <input 
                type="radio"
                id="hawaiian"
                name="isGlutenFree"
                value="false"
                checked={burger.isGlutenFree === "false"}
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
                checked={burger.isGlutenFree === "true"}
                onChange={handleChange}
              />
              Gluten-Free Roll
            </label>
          </div>
        </div>

        <label htmlFor="side">Sides
          <select
            id="side"
            name="side"
            value={burger.side}
            onChange={handleChange}
          >
            <OptionCollection options={sides} />
          </select>
        </label>

        <div className="button-group align-center">
          <input type="submit" value="Add burger" className="button" />
          <button type="button" onClick={clearForm} className="button alert">Reset burger</button>
        </div>
      </form>
    </div>
  )
}

export default BurgerForm