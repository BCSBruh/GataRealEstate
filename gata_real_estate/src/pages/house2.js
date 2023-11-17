import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import HouseInfo from "../components/houseComponents/houseInfo";
import Survey from "../components/survey";
import "./houseStyles.css";

function House2(props) {
  return (
    <>
      <Header />
      <div className="house-pictures">
        <img src="./images/House2.jpg" alt="house-2"></img>
      </div>
      <HouseInfo />
      <Survey />
      <Footer />
    </>
  );
}

export default House2;
