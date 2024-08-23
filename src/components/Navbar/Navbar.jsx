import React from "react";
import "./Navbar.css";
import logo from "../../assets/image.webp";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" className="navbar-logo"></img>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact me</li>
      </ul>
      <div className="nav-connect">Connect with me</div>
    </div>
  );
};

export default Navbar;
