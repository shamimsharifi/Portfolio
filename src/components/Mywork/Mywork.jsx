import React from "react";
import "./Mywork.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Mywork = () => {
  return (
    <div className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container"></div>
    </div>
  );
};

export default Mywork;
