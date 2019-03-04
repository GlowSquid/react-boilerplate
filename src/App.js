import React, { Component } from "react";
import { hot } from "react-hot-loader";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default hot(module)(App);
