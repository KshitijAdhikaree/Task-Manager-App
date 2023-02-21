import React from "react";

const SearchForm = ({ name, handleInputChange }) => {
  return (
    <form className="search-form">
      <input
        type="Search"
        placeholder="Search"
        name="name"
        value={name}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
