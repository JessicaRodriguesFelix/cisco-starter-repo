import { render } from "@testing-library/react";
import "./App.css";
import { Component } from "react";
import Banner from "./Banner";
import Exhibit from "./Exhibit";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner bannerText="Sextant" />
        <Exhibit name="Exhibit 1"></Exhibit>
        <Exhibit name="Exhibit 2"></Exhibit>
        <Exhibit name="Exibit 3"></Exhibit>
      </div>
    );
  }
}

export default App;
