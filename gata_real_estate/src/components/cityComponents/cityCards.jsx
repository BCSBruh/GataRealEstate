import React from "react";
import Card from "./cityCard";

function cities(props) {
  const numOfcities = [];
  for (let i = 0; i < props.cities.length; i++) {
    numOfcities.push(
      <Card
        href={props.cities[i].href}
        cityId={props.cities[i].cityId}
        text={props.cities[i].text}
      />
    );
  }
  return <div className="cards">{numOfcities}</div>;
}
//props.cities[0].href;
export default cities;
