import React from "react";
import Button from "./button";

function SearchButtons() {
  return (
    <div className="search-buttons">
      <Button href="/buy" buttonName="Buy" />
      <Button href="/rent" buttonName="Rent" />
    </div>
  );
}

export default SearchButtons;
