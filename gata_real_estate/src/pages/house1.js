import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import HouseInfo from "../components/houseComponents/houseInfo";
import Survey from "../components/survey";
import Carousel from "../components/carousel";
import "./houseStyles.css";

function House1(props) {
  /*
  <div className="house-pictures">
        <img src="./images/House1.jpg" alt="house-1"></img>
      </div>
  */

  var imageData = ["1", "2"];
  return (
    <>
      <Header />
      <Carousel data={imageData} />
      <HouseInfo />
      <Survey />
      <Footer />
    </>
  );
}

export default House1;
