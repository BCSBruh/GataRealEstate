import React from "react";
import Card from "./houseCard";

function Homes(props) {
  const numOfHouses = [];
  for (let i = 0; i < props.houses.houses.length; i++) {
    numOfHouses.push(
      <Card
        id={props.houses.houses[i].id}
        href={props.houses.houses[i].href}
        text={props.houses.houses[i].listingDate}
        bottomInfo={props.houses.houses[i].bottomInfo}
      />
    );
  }
  return (
    <div id="recentHomes" className="container">
      <h2>Newly listed homes in Statesboro</h2>
      <div className="cards">{numOfHouses}</div>
    </div>
  );
}

export default Homes;
