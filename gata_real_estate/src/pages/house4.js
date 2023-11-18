import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import HouseInfo from "../components/houseComponents/houseInfo";
import Survey from "../components/survey";
import Carousel from "../components/carousel";
import "./houseStyles.css";

function House4(props) {
  /*
  <div className="house-pictures">
        <img src="./images/House1.jpg" alt="house-1"></img>
      </div>
  */

  var imageData = ["2.1-0", "2-1", "2-2", "2-3", "2-4", "2-5", "2-6", "2-7"];
  return (
    <>
      <Header />
      <Carousel data={imageData} />
      <HouseInfo home={props} />
      <Survey />
      <Footer />
    </>
  );
}

export default House4;
