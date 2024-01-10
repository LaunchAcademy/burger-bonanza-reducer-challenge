import React from "react"

const BurgerTile = (props) => {
  const chosenToppings = props.toppings.map((topping) => {
    return (
      <li key={topping}>{topping}</li>
    )
  })

  return (
    <div className="callout">
      <p>Type: {props.type}</p>
      <p>Toppings:</p>
      <ul>
        {chosenToppings}
      </ul>
      <p>Roll: {props.isGlutenFree ? "gluten-free" : "Hawaiian"}</p>
      <p>Side: {props.side}</p>
    </div>
  )
}

export default BurgerTile