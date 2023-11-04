import React from "react";
import SearchButtons from "./searchButtons";

function Header() {
  return (
    <div id="header" className="container">
      <nav className="navbar">
        <div className="company">
          <a href="#header">GRE</a>
        </div>
        <SearchButtons />
      </nav>
    </div>
  );
}

export default Header;
