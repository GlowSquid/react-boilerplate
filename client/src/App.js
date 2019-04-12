import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      {/* <Switch> */}
      <Header />
      <Route exact path="/" component={Home} />
      <Footer />
      {/* </Switch> */}
    </div>
  );
};

export default App;
