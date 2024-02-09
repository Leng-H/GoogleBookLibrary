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
              <a href={bookObject.volumeInfo.previewLink}>Preview Link</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
