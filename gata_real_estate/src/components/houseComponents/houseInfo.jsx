import React from "react";
import Info from "./info";

function HouseInfo(props) {
  return (
    <div className="house-info">
      <div className="left-column">
        <div id="housePage" className="details">
          <div className={"top-details"}>
            <div>
              <h2>
                <span className="street">
                  props.bottomInfo[0].address[0].street
                </span>
                <br />
                <span className="state">
                  props.bottomInfo[0].address[0].state
                </span>
              </h2>
            </div>
            <br />
            <Info info={information.info} />
          </div>
          <div className={"price"}>
            <h3>props.bottomInfo[0].price</h3>
            <div>Est. Mortgage 1,445/mo</div>
            <span></span>
          </div>
        </div>
        <div className="description">
          <h1>Description</h1>
          <br />
          <p>
            New construction home in the heart of Statesboro! The home features
            3 bedrooms, 2 bathrooms, and is conveniently located within walking
            distance to shopping and restaurants! Call today to make this brand
            new home your own! All plans, specifications, renderings, and
            finishes are subject to change at builder's discretion. Owner is a
            licensed realtor in the state of Georgia
          </p>
        </div>
      </div>
      <div className="right-column">
        <div className="tour">
          <div className="text">
            <p>Check out a VR tour here</p>
          </div>
          <div className="button">
            <button>Take me there!</button>
          </div>
          <div className="button">
            <button>Request Info</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const information = {
  info: [
    {
      beds: 4,
      baths: 4,
      sqft: 1683,
    },
  ],
};

export default HouseInfo;
