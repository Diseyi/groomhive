import React from "react";
import "./Footer.css";
import twitter from "../../assets/black-twitter.png";
import linkedin from "../../assets/black-linkedin.png";
import medium from "../../assets/medium-icon.png";
import instagram from "../../assets/instagram-icon.png";


const Footer = () => {
  return (
    <section className="footer-container">

      <section className="footer-flex" >

        <div className="footerflex-container" >
          <h3 className="footerflex-title">Company</h3>
          <ul className="list-wrapper">
            <li className="list-footer">About</li>
            <li className="list-footer">Careers</li>
            <li className="list-footer">Our People</li>
          </ul>
        </div>

        <div className="footerflex-container" >
          <h3 className="footerflex-title">What We Do</h3>
          <ul className="list-wrapper">
            <li className="list-footer">Hire Talent</li>
            <li className="list-footer">Product Development</li>
            <li className="list-footer">Partnership</li>
          </ul>
        </div>

        <div className="footerflex-container" >
          <h3 className="footerflex-title">Sponsorship</h3>
          <ul className="list-wrapper">
            <li className="list-footer">Sponsor a Hiver</li>
            <li className="list-footer">Sponsor a HiveWoman</li>
            <li className="list-footer">Host an Event</li>
          </ul>
        </div>

        <div className="footerflex-container" >
          <h3 className="footerflex-title">Resources</h3>
          <ul className="list-wrapper">
            <li className="list-footer">Privacy Policy</li>
            <li className="list-footer">Terms & Conditions</li>
            <li className="list-footer">FAQs</li>
          </ul>
        </div>

        <div className="footerflex-container margin-top"  >
          <h3 className="footerflex-title">Contact Us</h3>
          <ul className="list-wrapper">
            <li className="list-footer">Glasshouse, 4th Floor, Palmdrive, Yenagoa, Bayelsa State</li>
          </ul>
        </div>

        <div className="footerflex-container margin-top" >
          
        </div>

        <div className="footerflex-container margin-top" >
          <h3 className="footerflex-title">Contact Us</h3>
          <ul className="list-wrapper">
            <li className="list-footer">hello@groomhive.com</li>
            <li className="list-footer">+234 806-647-3637</li>
          </ul>
        </div>

        <div className="footerflex-container margin-top" >
          <h3 className="footerflex-title">Contact With Us</h3>
          <div className="list-wrapper icon-flexfooter">
            <img src={linkedin} alt="twitter icon" className="footer-icon" />
            <img src={twitter} alt="twitter icon" className="footer-icon" />
            <img src={instagram} alt="twitter icon" className="footer-icon" />
            <img src={medium} alt="twitter icon" className="footer-icon" />
          </div>
        </div>


      </section>
    </section>
  );
};

export default Footer;
