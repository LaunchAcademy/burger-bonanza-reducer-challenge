const orderReducer = (order, action) => {
  switch (action.type) {
    case "addBurger": {
      return [
        ...order,
        action.newBurger
      ]
    }
    default: {
      throw Error("Unknown action: " + action.type)
    }
  }
}

export default orderReducer