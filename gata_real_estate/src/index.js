import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import House1 from "./pages/house1";
import House2 from "./pages/house2";
import House3 from "./pages/house3";
import House4 from "./pages/house4";
import Rent from "./pages/rent";
import Buy from "./pages/buy";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const houseCards = {
  houses: [
    {
      id: "house1",
      href: "/house1",
      listingDate: "NEW - 2 DAYS AGO",
      link: "https://www.youtube.com/embed/Uonop9_TsWw?si=xYMfVjqMav1SBGaN",
      description:
        "This contemporary luxury house offers a sophisticated urban living experience. Located in the heart of the city, it features an open-concept living area with large windows, flooding the space with natural light. The kitchen is equipped with high-end appliances and a sleek island. The master bedroom boasts a spacious layout and en-suite bathroom. The second bedroom is versatile for guests or a home office. Residents can enjoy the building's amenities, including a fitness center, rooftop terrace with a pool, and concierge services. With smart home features and breathtaking city views from the balcony, this apartment offers the perfect combination of comfort and convenience.",
      bottomInfo: [
        {
          price: "$399,900",
          info: [
            {
              beds: 4,
              baths: 4,
              sqft: 1683,
            },
          ],
          address: [
            {
              street: "1205 Mill Creek Rd",
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
      link: "https://www.youtube.com/embed/DFg7e_3qSzg?si=grH_3_6qmvt9QY0h",
      description:
        "This contemporary luxury apartment offers a sophisticated urban living experience. Located in the heart of the city, it features an open-concept living area with large windows, flooding the space with natural light. The kitchen is equipped with high-end appliances and a sleek island. The master bedroom boasts a spacious layout and en-suite bathroom. The second bedroom is versatile for guests or a home office. Residents can enjoy the building's amenities, including a fitness center, rooftop terrace with a pool, and concierge services. With smart home features and breathtaking city views from the balcony, this apartment offers the perfect combination of comfort and convenience.",
      bottomInfo: [
        {
          price: "$213,000",
          info: [
            {
              beds: 2,
              baths: 1,
              sqft: 532,
            },
          ],
          address: [
            {
              street: "1234 Burkhalter Ave.",
              city: "Savannah",
              state: "GA",
              zip: 31419,
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
      id: "house3",
      href: "/house3",
      listingDate: "NEW - 6 HRS AGO",
      link: "https://www.youtube.com/embed/pEqYEa94vhU?si=XgmABKmbjxRWciTx",
      description:
        "This contemporary luxury house offers a sophisticated urban living experience. Located in the heart of the city, it features an open-concept living area with large windows, flooding the space with natural light. The kitchen is equipped with high-end appliances and a sleek island. The master bedroom boasts a spacious layout and en-suite bathroom. The second bedroom is versatile for guests or a home office. Residents can enjoy the building's amenities, including a fitness center, rooftop terrace with a pool, and concierge services. With smart home features and breathtaking city views from the balcony, this apartment offers the perfect combination of comfort and convenience.",
      bottomInfo: [
        {
          price: "$1200/month",
          info: [
            {
              beds: 2,
              baths: 1.5,
              sqft: 670,
            },
          ],
          address: [
            {
              street: "3145 Fair Rd.",
              city: "Statesboro",
              state: "GA",
              zip: 30458,
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
      id: "house4",
      href: "/house4",
      listingDate: "NEW - 3 DAYS AGO",
      link: "https://www.youtube.com/embed/WRyhW1YTKMo?si=eAkhinIETHGfPnW1",
      description:
        "This contemporary luxury apartment offers a sophisticated urban living experience. Located in the heart of the city, it features an open-concept living area with large windows, flooding the space with natural light. The kitchen is equipped with high-end appliances and a sleek island. The master bedroom boasts a spacious layout and en-suite bathroom. The second bedroom is versatile for guests or a home office. Residents can enjoy the building's amenities, including a fitness center, rooftop terrace with a pool, and concierge services. With smart home features and breathtaking city views from the balcony, this apartment offers the perfect combination of comfort and convenience.",
      bottomInfo: [
        {
          price: "$1800/month",
          info: [
            {
              beds: 3,
              baths: 3.5,
              sqft: 1200,
            },
          ],
          address: [
            {
              street: "280 Randolph St.",
              city: "Savannah",
              state: "GA",
              zip: 31401,
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App houses={houseCards.houses} />,
  },
  {
    path: "/house1",
    element: <House1 house={houseCards.houses[0]} />,
  },
  {
    path: "/house2",
    element: <House2 house={houseCards.houses[1]} />,
  },
  {
    path: "/house3",
    element: <House3 house={houseCards.houses[2]} />,
  },
  {
    path: "/house4",
    element: <House4 house={houseCards.houses[3]} />,
  },
  {
    path: "/rent",
    element: <Rent />,
  },
  {
    path: "/buy",
    element: <Buy />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
