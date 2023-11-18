import React, { Component } from "react";
import Header from "./components/header";
import Splash from "./components/splash";
import Cities from "./components/cityComponents/cities";
import Homes from "./components/houseComponents/homes";
import Footer from "./components/footer";

function App(props) {
  return (
    <>
      <Header />
      <Splash />
      <Cities />
      <Homes houses={props} />
      <Footer />
    </>
  );
}

export default App;
