import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Carousel from "../components/carousel";
import HouseInfo from "../components/houseComponents/houseInfo";
import Survey from "../components/survey";
import "./houseStyles.css";

function House2(props) {
  var imageData = ["2-0", "2-1", "2-2", "2-3", "2-4", "2-5", "2-6", "2-7"];
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

export default House2;
