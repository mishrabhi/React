import { useDispatch, useSelector } from "react-redux";
import { deleteBook, toggleReadStatus } from "../redux/actions";

const BookList = () => {
  const { books, filter } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const filteredBooks = books.filter((book) => {
    if (filter === "READ") return book.read;
    if (filter === "UNREAD") return !book.read;
    return true; //All books
  });

  return (
    <ul>
      {filteredBooks.map((book) => (
        <li key={book.id}>
          <span
            style={{ textDecoration: book.read ? "line-through" : "none" }}
            onClick={() => dispatch(toggleReadStatus(book.id))}
          >
            {book.title} by {book.author}
          </span>
          <button onClick={() => dispatch(deleteBook(book.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
