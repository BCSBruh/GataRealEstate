import React from "react";

function Info(props) {
  return (
    <div className="info">
      <div className="info-details">
        <img src="./images/BedIcon.svg" alt="#" />
        <p>{props.info[0].beds}bd</p>
      </div>
      <div className="info-details">
        <img src="./images/BathIcon.svg" alt="a" />
        <p>{props.info[0].baths}ba</p>
      </div>
      <div className="info-details">
        <img src="./images/SquareFeetIcon.svg" alt="s" />
        <p>{props.info[0].sqft} sqft</p>
      </div>
    </div>
  );
}

export default Info;
