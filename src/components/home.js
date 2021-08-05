import React from "react";
import "../styles/home.css";
import background from "../bg.jpeg";

const Home = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="homeContainer"
      ></div>
      <span className="placeholder">
        Test task for front end engineer position
      </span>
    </>
  );
};

export default Home;
