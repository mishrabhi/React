import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, editBook } from "../redux/actions";

const BookForm = ({ existingBook = null }) => {
  const [title, setTitle] = useState(existingBook ? existingBook.title : "");
  const [author, setAuthor] = useState(existingBook ? existingBook.author : "");
  const [genre, setGenre] = useState(existingBook ? existingBook.genre : "");
  const [read, setread] = useState(existingBook ? existingBook.read : false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    //New Book Obj
    const newBook = {
      id: existingBook ? existingBook.id : Date.now(),
      title,
      author,
      genre,
      read,
    };

    if (existingBook) {
      dispatch(editBook(newBook));
    } else {
      dispatch(addBook(newBook));
    }

    //Resetting the form
    setTitle("");
    setAuthor("");
    setGenre("");
    setread(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
      />
      <input
        type="text"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        placeholder="Genre"
      />
      <label>
        <input
          type="checkbox"
          checked={read}
          onChange={(e) => setRead(e.target.checked)}
        />{" "}
        Read
      </label>
      <button type="submit">{existingBook ? "Update Book" : "Add Book"}</button>
    </form>
  );
};

export default BookForm;
