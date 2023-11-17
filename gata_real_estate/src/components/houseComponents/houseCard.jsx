import React from "react";
import BottomInfo from "./bottomInfo";

function Card(props) {
  return (
    <a href={props.href} id={props.id} className="house-card">
      <div className="card">
        <div>
          <h3>
            <b>{props.text}</b>
          </h3>
        </div>
      </div>
      <BottomInfo bottomInfo={props.bottomInfo} />
    </a>
  );
}

export default Card;
