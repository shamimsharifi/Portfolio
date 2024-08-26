import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile.png";
import my_Resume from "../../assets/shamim_resume.pdf";
import { Link } from "react-router-dom";

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
        {/* <div className="hero-connect">Connect with me</div> */}
        {/* <div className="hero-resume">My resume</div> */}
        <Link to="/contact" className="hero-connect">
          Connect with me
        </Link>
        <a
          href={my_Resume}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-resume"
        >
          View My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
