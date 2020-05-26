import React from "react";

class SearchBox extends React.Component {
  keyDown = (event, addKitten, searchField) => {
    if (event.key === "Enter") {
      addKitten(searchField);
    }
  };

  render() {
    const { searchChange, addKitten, searchField } = this.props;
    return (
      <div className="pa2">
        <input
          aria-label="Search Kittens"
          className="w-80 w-40-l pa3 ba b--green bg-lightest-blue"
          type="search"
          placeholder="search kittens or write kitten name to create"
          onChange={searchChange}
          onKeyDown={(event) => this.keyDown(event, addKitten, searchField)}
        />
      </div>
    );
  }
}

export default SearchBox;
