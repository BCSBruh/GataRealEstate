import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Splash from "./components/splash";
import Cities from "./components/cityComponents/cities";
import Homes from "./components/houseComponents/homes";
import Footer from "./components/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Splash />
    <Cities />
    <Homes />
    <Footer />
  </React.StrictMode>
);
