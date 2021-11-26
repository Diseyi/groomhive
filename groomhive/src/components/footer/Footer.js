import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-container">

      <section className="flex" >

        <div className="flex-container" >
          <h3 className="title">Company</h3>
          <ul className="list-wrapper">
            <li className="list">About</li>
            <li className="list">Careers</li>
            <li className="list">Our People</li>
          </ul>
        </div>

        <div className="flex-container" >
          <h3 className="title">What We Do</h3>
          <ul className="list-wrapper">
            <li className="list">Hire Talent</li>
            <li className="list">Product Development</li>
            <li className="list">Partnership</li>
          </ul>
        </div>

        <div className="flex-container" >
          <h3 className="title">Sponsorship</h3>
          <ul className="list-wrapper">
            <li className="list">Sponsor a Hiver</li>
            <li className="list">Sponsor a HiveWoman</li>
            <li className="list">Host an Event</li>
          </ul>
        </div>

        <div className="flex-container" >
          <h3 className="title">Resources</h3>
          <ul className="list-wrapper">
            <li className="list">Privacy Policy</li>
            <li className="list">Terms & Conditions</li>
            <li className="list">FAQs</li>
          </ul>
        </div>


      </section>
    </section>
  );
};

export default Footer;
