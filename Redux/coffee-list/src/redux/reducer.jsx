//Define Intial State
const intialState = {
  coffees: [],
  loading: false,
  error: null,
};

export const coffeeReducer = (state = intialState, action) => {
  switch (action.type) {
    case "FETCH_COFFEE_REQUEST":
      return { ...state, loading: true };
    case "FETCH_COFFEE_SUCCESS":
      return { ...state, loading: false, coffees: action.payload };
    case "FETCH_COFFEE_FAILURE":
      return { ...state, loading: false, error: coffeeReducer.payload };
    default:
      return state;
  }
};
