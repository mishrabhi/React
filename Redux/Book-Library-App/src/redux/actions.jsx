export const ADD_BOOK = "ADD_BOOK";
export const DELETE_BOOK = "DELETE_BOOK";
export const EDIT_BOOK = "EDIT_BOOK";
export const TOGGLE_READ_STATUS = "TOGGLE_READ_STATUS";
export const FILTER_BOOKS = "FILTER_BOOKS";

//Action Creators
export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  payload: id,
});

export const editBook = (book) => ({
  type: EDIT_BOOK,
  payload: book,
});

export const toggleReadStatus = (id) => ({
  type: TOGGLE_READ_STATUS,
  payload: id,
});

export const filterBooks = (filter) => ({
  type: FILTER_BOOKS,
  payload: filter,
});
