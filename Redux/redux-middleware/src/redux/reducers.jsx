import { combineReducers } from "redux";

//Books Reducer
const booksReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.payload];
    case "REMOVE_BOOK":
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

//Auth Reducer : Handling login/logout
const authReducer = (state = { isAuthenticated: false }, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true };
    case "LOGOUT":
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

// Combine both reducers into a root reducer
const rootReducer = combineReducers({
  books: booksReducer,
  auth: authReducer,
});

export default rootReducer;
