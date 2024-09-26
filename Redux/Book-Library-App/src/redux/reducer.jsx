import {
  ADD_BOOK,
  DELETE_BOOK,
  EDIT_BOOK,
  FILTER_BOOKS,
  TOGGLE_READ_STATUS,
} from "./actions";

const initialState = {
  books: [],
  filter: "ALL",
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };

    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };

    case EDIT_BOOK:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? action.payload : book
        ),
      };

    case TOGGLE_READ_STATUS:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload ? { ...book, read: !book.read } : book
        ),
      };

    case FILTER_BOOKS:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export default bookReducer;
