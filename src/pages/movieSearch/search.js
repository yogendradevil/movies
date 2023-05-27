import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./search.css";
import MovieSearch from "../../components/movieList/movieSearch";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchQuery(searchInput);
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      <div className="search">
        <form onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="eg: Fast & Furious"
            id="searchBar"
            value={searchInput}
            onChange={handleInputChange}
          />
          <button type="submit">GO</button>
        </form>
      </div>
      <MovieSearch searchQuery={searchQuery} />
    </>
  );
};

export default Search;
