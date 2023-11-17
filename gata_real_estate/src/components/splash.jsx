import React from "react";
import SearchBar from "./searchBar";
import SearchButtons from "./searchButtons";

function Splash() {
  return (
    <div id="splash" className="container">
      <h1 className="title">Welcome to the future of home buying</h1>
      <SearchButtons />
      <SearchBar placeholder="Statesboro, GA" />
    </div>
  );
}

export default Splash;
