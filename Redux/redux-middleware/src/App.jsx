import React from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  //Select state using useSelector
  const books = useSelector((state) => state.books);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  //Dispath Actions
  const addBook = () => {
    dispatch({
      type: "ADD_BOOK",
      payload: { id: 1, title: "Redux Essentials" },
    });
  };

  //login
  const login = () => {
    dispatch({ type: "LOGIN" });
  };

  //logout
  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div>
      <h1>Redux Middleware</h1>

      {/* Authentication Actions */}
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      <p>{isAuthenticated ? "Logged In" : "Logged out"}</p>

      {/* Books Actions */}
      <button onClick={addBook}>Add Book</button>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
