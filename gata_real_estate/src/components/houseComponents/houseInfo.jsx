import React from "react";
import Info from "./info";

function HouseInfo(props) {
  const state =
    props.home.house.bottomInfo[0].address[0].city +
    ", " +
    props.home.house.bottomInfo[0].address[0].state +
    " " +
    props.home.house.bottomInfo[0].address[0].zip;

  return (
    <div className="house-info">
      <div className="left-column">
        <div id="housePage" className="details">
          <div className={"top-details"}>
            <div>
              <h2>
                <span className="street">
                  {props.home.house.bottomInfo[0].address[0].street}
                </span>
                <br />
                <span className="state">{state}</span>
              </h2>
            </div>
            <br />
            <Info info={props.home.house.bottomInfo[0].info} />
          </div>
          <div className={"price"}>
            <h3>{props.home.house.bottomInfo[0].price}</h3>
            <div>Est. Mortgage 1,445/mo</div>
            <span></span>
          </div>
        </div>
        <div className="description">
          <h1>Description</h1>
          <br />
          <p>{props.home.house.description}</p>
        </div>
      </div>
      <div className="right-column">
        <form className="tour">
          <div className="text">
            <p>Check out a VR tour here</p>
          </div>
          <div className="button">
            <button type="submit" formAction={props.home.house.link}>
              Take me there!
            </button>
          </div>
          <div className="button">
            <button>Request Info</button>
          </div>
        </form>
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
