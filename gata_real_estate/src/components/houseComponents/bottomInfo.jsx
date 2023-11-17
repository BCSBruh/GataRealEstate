import React from "react";
import Info from "./info";

function BottomInfo(props) {
  const street = props.bottomInfo[0].address[0].street + ",";
  const state =
    props.bottomInfo[0].address[0].city +
    ", " +
    props.bottomInfo[0].address[0].state +
    " " +
    props.bottomInfo[0].address[0].zip;
  const realtor =
    props.bottomInfo[0].realtor[0].name +
    ",MLS#" +
    props.bottomInfo[0].realtor[0].mls;
  return (
    <div className="bottom-info">
      <div className="price">
        <p>
          <b>{props.bottomInfo[0].price}</b>
        </p>
      </div>
      <Info info={props.bottomInfo[0].info} />
      <div className="address">
        <p>{street}</p>
        <p>{state}</p>
      </div>
      <div className="realtor">
        <p>Gata Real Estate,MLS#20155727</p>
      </div>
    </div>
  );
}

export default BottomInfo;
