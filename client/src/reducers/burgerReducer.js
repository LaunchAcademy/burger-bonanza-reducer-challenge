const burgerReducer = (burgerOrder, action) => {
  switch (action.type) {
    case "orderChange": {
      return {
        ...burgerOrder,
        [action.name]: action.value
      }
    }
    case "orderCheckboxChange": {
      const toppingChoice = action.value
      if (burgerOrder.toppings.includes(toppingChoice)) {
        const filteredToppings = burgerOrder.toppings.filter((topping) => topping !== toppingChoice)
        return {
          ...burgerOrder,
          toppings: filteredToppings
        }
      } else {
        return {
          ...burgerOrder,
          toppings: [...burgerOrder.toppings, toppingChoice]
        }
      }
    }
    case "resetOrderForm": {
      return {
        ...action.initialOrder
      }
    }
    default: {
      throw Error("Unknown action: " + action.type)
    }
  }
}

export default burgerReducer