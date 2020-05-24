const initialState = {
  markets: []
}

const markets = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MARKETS':
      return {
        ...state,
        markets: state.markets.concat(action.markets)
      }
    default:
      return state
  }
}

export { markets }
