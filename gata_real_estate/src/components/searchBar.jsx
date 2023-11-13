import React from "react";
import { useState } from "react";

function SearchBar(props) {
  const [searchInput, setSearchInput] = useState("");

  function search(event) {
    //setSearchInput(event.target.value);
    if (
      searchInput !== "statesboro, ga" &&
      searchInput !== "atlanta, ga" &&
      searchInput !== "statesboro" &&
      searchInput !== "atlanta"
    ) {
      //Turn this into redirect
      alert("You searched " + searchInput + ". That is the wrong city buddy");
    }
  }

  function setText(event) {
    var lowerCase = event.target.value.toLowerCase();
    setSearchInput(lowerCase);
  }

  return (
    <form
      autoComplete="off"
      id="searchBar"
      className="container"
      onSubmit={search}
    >
      <input
        name="location"
        onChange={setText}
        placeholder={props.placeholder}
      />
      <button type="submit" id="searchIcon">
        <img
          src="https://cdn2.hubspot.net/hubfs/4004166/bioticresearch_website_assets/images/search_icon.png"
          alt="search-icon"
        ></img>
      </button>
    </form>
  );
}

export default SearchBar;
