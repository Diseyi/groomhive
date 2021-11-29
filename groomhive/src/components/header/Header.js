import React from "react";
import logo from "../../assets/groomHive.svg";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="Mobile-Header">
      <Link to="/" style={{ textDecoration: 'none' }} > <img src={logo} alt="logo" className="logo" /></Link>
        <button className="Button-Menu">
          <svg viewBox="0 0 100 60" width="40" height="40">
            <rect width="100" height="10"></rect>
            <rect y="23" width="100" height="10"></rect>
            <rect y="45" width="100" height="10"></rect>
          </svg>
        </button>
      </div>

      <div className="tablet-Header">
      <Link to="/" style={{ textDecoration: 'none' }} > <img src={logo} alt="logo" className="logo" /></Link>
        <div className="Options-Header">
        <Link to="/hivewoman" style={{ textDecoration: 'none' }} > <button className="Button-Header Hover">HiveWoman</button> </Link>
        <Link to="/invoices" style={{ textDecoration: 'none' }} > <button className="Button-Header Hover">Sponsorship</button> </Link>
        <Link to="/invoices" style={{ textDecoration: 'none' }} > <button className="Button-Header Hover">About Us</button> </Link>
          <button className="Button-Menu">
            <svg viewBox="0 0 100 60" width="40" height="40">
              <rect width="100" height="10"></rect>
              <rect y="30" width="100" height="10"></rect>
              <rect y="60" width="100" height="10"></rect>
            </svg>
          </button>
         
        </div>
      </div>

      <div className="Laptop-Header">
      <Link to="/" style={{ textDecoration: 'none' }} > <img src={logo} alt="logo" className="logo" /></Link>
        <div className="Options-Header Flex-Header">
        <Link to="/hivewoman" style={{ textDecoration: 'none' }} > <button className="Button-Header Hover">HiveWoman</button> </Link>
        <Link to="/sponsorship" style={{ textDecoration: 'none' }} ><button className="Button-Header Hover">Sponsorship</button> </Link>
        <Link to="/about" style={{ textDecoration: 'none' }} > <button className="Button-Header Hover">About Us</button> </Link>
          <button className="Button-Header skyblue">Apply Now</button>
          <button className="Register-Header">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
