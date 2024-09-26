import React from "react";

const BookDetails = ({ bookId }) => {
  const book = useSelector((state) =>
    state.books.books.find((b) => b.id === bookId)
  );

  if (!book) {
    return <div>Book Not Found!</div>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <p>
        <b>Author:</b> {book.author}
      </p>
      <p>
        <b>Genre:</b>
        {book.genre}
      </p>
      <p>
        <b>Status:</b> {book.read ? "Read" : "Unread"}
      </p>
    </div>
  );
};

export default BookDetails;
