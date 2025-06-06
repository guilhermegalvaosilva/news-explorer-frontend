import "./SearchForm.css";
import React, { useState } from "react";
// import { useForm } from "react-hook-form";

function SearchForm({ handleSearch }) {
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!keyword) {
      setError("Please enter a search");
      console.error("Search is empty");
    } else {
      setError("");
      console.log("Calling onSearch with keyword:", keyword);
      handleSearch(keyword);
    }
  };
  return (
    <div className="search">
      <h1 className="search__title">What's going on in the world?</h1>
      <p className="search__description">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form className="search__form" onSubmit={handleSearchSubmit}>
        <input
          className="search__input"
          type="text"
          placeholder="Enter topic"
          name="search"
          value={keyword}
          onChange={handleInputChange}
        />
        <button className="search__submit-btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
