import React from "react";
import { Helmet } from "react-helmet";

function Home() {
  function head() {
    return (
      <Helmet>
        <title>React Boilerplate</title>
      </Helmet>
    );
  }

  return (
    <div className="home">
      {head()}
      <h1 className="head">Home Module</h1>
    </div>
  );
}

export default Home;
