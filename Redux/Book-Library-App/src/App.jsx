import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import BookForm from "./components/bookForm";
import BookList from "./components/bookList";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <h1>Book Library</h1>
          <BookForm />
          <BookList />
        </div>
      </Provider>
    </>
  );
}

export default App;
