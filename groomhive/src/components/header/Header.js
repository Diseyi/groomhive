import React from "react";
import logo from "../../assets/groomHive.svg";
import './Header.css';

const Header = () => {
  return (
    <div className="Header" >
      <div className="Mobile-Header">
        <img src={logo} alt="logo" className="logo" />
        <button className="Button-Menu" >Menu</button>
      </div>

      <div className="tablet-Header flex">
      <img src={logo} alt="logo" className="logo" />
        <div className="Options-Header Flex-Header">
          <button className="Button-Header">HiveWoman</button>
          <button className="Button-Header">Sponsorship</button>
          <button className="Button-Header">About Us</button>
          <button className="Button-Menu" >Menu</button>
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
