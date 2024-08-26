import React, { useState, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/image.webp";
import underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <img src={logo} alt="" className="navbar-logo" />
      <img src={menu_open} alt="" onClick={openMenu} className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          alt=""
          onClick={closeMenu}
          className="nav-mob-close"
        />
        <li>
          <p onClick={() => setMenu("home")}>Home</p>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <p onClick={() => setMenu("about")}>About me</p>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <p onClick={() => setMenu("services")}>Services</p>
          {menu === "services" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <p onClick={() => setMenu("work")}>Portfolio</p>
          {menu === "work" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <p onClick={() => setMenu("contact")}>Contact me</p>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">Connect with me</div>
    </div>
  );
};

export default Navbar;
