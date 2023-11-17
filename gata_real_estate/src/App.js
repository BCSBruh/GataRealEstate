import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Splash from "./components/splash";
import Cities from "./components/cityComponents/cities";
import Homes from "./components/houseComponents/homes";
import Footer from "./components/footer";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { apiResponse: "" };
  // }

  // callAPI() {
  //   fetch("http://localhost:9000/db", { method: "GET" })
  //     .then((res) => res.text())
  //     .then((res) => this.setState({ apiResponse: res }));
  // }

  // componentDidMount() {
  //   this.callAPI();
  // }

  render() {
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
}

export default App;
