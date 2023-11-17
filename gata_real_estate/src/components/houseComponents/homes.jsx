import React from "react";
import Card from "./houseCard";

function Homes(props) {
  const numOfHouses = [];
  for (let i = 0; i < houseCards.houses.length; i++) {
    numOfHouses.push(
      <Card
        id={houseCards.houses[i].id}
        href={houseCards.houses[i].href}
        text={houseCards.houses[i].listingDate}
        bottomInfo={houseCards.houses[i].bottomInfo}
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

const houseCards = {
  houses: [
    {
      id: "house1",
      href: "/house1",
      listingDate: "NEW - 2 DAYS AGO",
      bottomInfo: [
        {
          price: "399,900",
          info: [
            {
              beds: 4,
              baths: 4,
              sqft: 1683,
            },
          ],
          address: [
            {
              street: "0000 Mill Creek Rd",
              city: "Statesboro",
              state: "GA",
              zip: 30461,
            },
          ],
          realtor: [
            {
              name: "Gata Real Estate",
              mls: 20155727,
            },
          ],
        },
      ],
    },
    {
      id: "house2",
      href: "/house2",
      listingDate: "NEW - 4 HRS AGO",
      bottomInfo: [
        {
          price: "399,900",
          info: [
            {
              beds: 4,
              baths: 4,
              sqft: 1683,
            },
          ],
          address: [
            {
              street: "0000 Mill Creek Rd",
              city: "Statesboro",
              state: "GA",
              zip: 30461,
            },
          ],
          realtor: [
            {
              name: "Gata Real Estate",
              mls: 20155727,
            },
          ],
        },
      ],
    },
  ],
};
