import React, { useState } from "react"

const BurgerForm = (props) => {
  const [order, setOrder] = useState({
    type: "",
    toppings: [],
    isGlutenFree: "",
    side: ""
  })

  const handleChange = (event) => {
    setOrder({
      ...order,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleCheckChange = (event) => {
    const toppingChoice = event.currentTarget.value
    if (order.toppings.includes(toppingChoice)) {
      const filteredToppings = order.toppings.filter((topping) => topping !== toppingChoice)
      setOrder({
        ...order,
        toppings: filteredToppings
      })
    } else {
      setOrder({
        ...order,
        toppings: [...order.toppings, toppingChoice]
      })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(order)
  }

  const clearForm = () => {
    setOrder({
      type: "",
      toppings: [],
      isGlutenFree: "",
      side: ""
    })
  }

  const burgerTypes = ["", "medium rare", "medium", "medium well", "well done", "chicken", "vegan"]
  const burgerTypeOptions = burgerTypes.map((type) => {
    return (
      <option key={type} value={type}>{type}</option>
    )
  })

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

  const sides = ["", "fries", "potatoes", "salad", "veggies"]
  const sideOptions = sides.map((side) => {
    return (
      <option key={side} value={side}>{side}</option>
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
            {burgerTypeOptions}
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
            {sideOptions}
          </select>
        </label>

        <div className="button-group">
          <input type="submit" value="Place Order" className="button" />
          <button type="button" onClick={clearForm} className="button">Clear Form</button>
        </div>

      </form>
    </div>
  )
}

export default BurgerForm