import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Splash from "./components/splash";
import Cities from "./components/cityComponents/cities";
import Homes from "./components/houseComponents/homes";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Splash />
      <Cities />
      <Homes />
      <Footer />
    </>
  );
}

export default App;
