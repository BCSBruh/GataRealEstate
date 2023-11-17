import React from "react";
import Cards from "./cityCards";

const cityCards = {
  cities: [
    {
      cityId: "statesboro",
      href: "#header",
      text: "Statesboro, GA",
    },
    {
      cityId: "atlanta",
      href: "#header",
      text: "Savannah, GA",
    },
  ],
};

function Cities() {
  return (
    <div id="cityCards" className="container">
      <div className="container">
        <h2>Explore homes on Gata Real Estate</h2>
        <p>
          Browse homes for sale or rent, original photos of the homes, resident
          reviews, and immersive 3D and Virtual Reality views to find the
          perfect home.
        </p>
      </div>
      <Cards cities={cityCards.cities} />
    </div>
  );
}

export default Cities;
