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

  var imageData = ["1-0", "1-1", "1-2", "1-3", "1-4", "1-5", "1-6", "1-7"];
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

export default House1;
