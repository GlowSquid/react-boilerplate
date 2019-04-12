import React from "react";
import ReactDOM from "react-dom";
import "./style/main.less";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// import React from "react";
// import ReactDOM from "react-dom";
// import "./style/main.less";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));
