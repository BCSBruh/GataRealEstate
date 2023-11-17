import React from "react";

function Card(props) {
  return (
    <a href={props.href} id={props.cityId} className="card">
      <div>
        <h3>
          <b>{props.text}</b>
        </h3>
      </div>
    </a>
  );
}

export default Card;
