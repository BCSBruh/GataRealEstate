import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import HouseInfo from "../components/houseComponents/houseInfo";
import Survey from "../components/survey";
import "./houseStyles.css";

function House1(props) {
  return (
    <>
      <Header />
      <div className="house-pictures">
        <img src="./images/House1.jpg" alt="house-1"></img>
      </div>
      <HouseInfo />
      <Survey />
      <Footer />
    </>
  );
}

export default House1;
