import React from "react";
import footer_logo from "../../assets/footer_logo.svg";
import "./Footer.css";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src={footer_logo} alt="" />
          <p>I am a sweeeeeet girl</p>
        </div>
        <div className="footer-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          {" "}
          2024 Shamim Sharifi. All rights are reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Contact me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
