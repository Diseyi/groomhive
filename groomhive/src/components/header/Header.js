import React from "react";
import logo from "../../assets/groomHive.svg";
import "./Header.css";
import menu from "../../assets/icon-hamburger.svg";
// import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="Mobile-Header">
        <img src={logo} alt="logo" className="logo" />
        <button className="Button-Menu">
          <svg viewBox="0 0 100 60" width="40" height="40">
            <rect width="100" height="10"></rect>
            <rect y="23" width="100" height="10"></rect>
            <rect y="45" width="100" height="10"></rect>
          </svg>
        </button>
      </div>

      <div className="tablet-Header flex">
        <img src={logo} alt="logo" className="logo" />
        <div className="Options-Header Flex-Header">
          <button className="Button-Header">HiveWoman</button>
          <button className="Button-Header">Sponsorship</button>
          <button className="Button-Header">About Us</button>
          <button className="Button-Menu">Menu</button>

          {/* </div>

        <div className="GetStarted-Header Flex-Header"> */}
          {/* <button className="Button-Header skyblue">Apply Now</button>
          <button className="Register-Header">Apply Now</button> */}
        </div>
      </div>

      <div className="Laptop-Header">
        <img src={logo} alt="logo" className="logo" />
        <div className="Options-Header Flex-Header">
          <button className="Button-Header">HiveWoman</button>
          <button className="Button-Header">Sponsorship</button>
          <button className="Button-Header">About Us</button>
          {/* </div>

        <div className="GetStarted-Header Flex-Header"> */}
          <button className="Button-Header skyblue">Apply Now</button>
          <button className="Register-Header">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
