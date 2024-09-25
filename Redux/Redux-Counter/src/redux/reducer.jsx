export const initState = {
  count: 0,
};

//creates a copy of original state and updates it
export const counterReducer = (state = initState, action) => {
  //action => {type, payload}

  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload };
    case "DECREMENT":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};
