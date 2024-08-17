import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import { getBook } from "../../services/bookapi";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBook().then(setBooks);
  }, []);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="search-bar">
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput}
        />
      </div>
      <div className="book-cards">
        {books.items?.map((bookObject) => (
          <div className="card" key={bookObject.id}>
            <div className="header">{bookObject.volumeInfo.title}</div>
            <div className="body">
              <p>Authors: {bookObject.volumeInfo.authors}</p>
              <br />
              <p>Publlisher: {bookObject.volumeInfo.publisher}</p>
              <br />
              <p>Description: {bookObject.volumeInfo.description}</p>
              <br />
              <p>Average Rating: {bookObject.volumeInfo.averageRating}</p>
              <br />
              <a href={bookObject.volumeInfo?.imageLinks?.smallThumbnail}>
                <img
                  src={bookObject.volumeInfo?.imageLinks?.smallThumbnail}
                  alt="book thumnail"
                ></img>
              </a>
              <br />
              <a href={bookObject.volumeInfo.previewLink}>Preview Link</a>
              <br />
              <a href={bookObject.volumeInfo.infoLink}>Information Link</a>
              <br />
              <a href={bookObject.volumeInfo.canonicalVolumeLink}>
                Canonical Volume Link
              </a>
              <br />
              {bookObject.accessInfo.pdf.isAvailable && (
                <a href={bookObject.volumeInfo.canonicalVolumeLink}>Download</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
