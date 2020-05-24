const initialState = {
  marketsLocations: []
}

const Locations = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      const adddedLocation = action.location
      return {
        ...state,
        marketsLocations: [...state.marketsLocations, adddedLocation]
      }
    default:
      return state
  }
}

export { Locations }
