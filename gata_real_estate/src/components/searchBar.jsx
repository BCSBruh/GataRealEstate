import React from "react";

function SearchBar(props) {
  return (
    <div id="searchBar">
      <input type="text" placeholder={props.placeholder} />
    </div>
  );
}

export default SearchBar;
