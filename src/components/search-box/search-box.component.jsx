import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        aria-label="Search Kittens"
        className="w-80 w-40-l pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search kittens or write kitten name to create"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
