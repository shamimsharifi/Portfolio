import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="Shmi" />
      <h1>
        <span>I'm shamim Sharifi, </span>a full stack software Engineer based in
        Denver, CO.
      </h1>
      <p>
        am a full-stack software developer based in Denver, CO, with a strong
        background in database development and web technologies like Python,
        SQL, and JavaScript. Passionate about creating efficient, user-focused
        solutions
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
