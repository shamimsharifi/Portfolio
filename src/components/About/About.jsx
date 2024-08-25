import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img className="image" src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am Shamim Sharifi, a full-stack software developer based in
              Denver, CO, with a diverse background that spans database
              development, customer service, and web technologies. With
              proficiency in Python, SQL, JavaScript, and React, I specialize in
              creating efficient, user-centric software solutions. My experience
              includes developing a customer information management system using
              SQL Server, contributing to database maintenance, and building
              RESTful APIs to enhance web service communications. Passionate
              about leveraging my technical skills to solve complex problems, I
              aim to contribute to projects that innovate and improve business
              processes.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>SQL</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievments">
        <div className="about-achievment">
          <h1>2+</h1>
          <p>Years of Eperrience</p>
        </div>
        <div className="about-achievment">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
        <div className="about-achievment">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
      </div>
    </div>
  );
};

export default About;
