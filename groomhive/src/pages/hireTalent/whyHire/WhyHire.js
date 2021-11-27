import React from "react";
import clock from "../../../assets/clock-icon.png";
import star from "../../../assets/star-icon.png";
import headphone from "../../../assets/headphone-icon.png";
import "./WhyHire.css";

const WhyHire = () => {
  return (
    <div className="whyhire-container">
      <section className="whyhire-section">
        <h2 className="whyhire-title">
          Why you should hire through GroomHive’s Programme.
        </h2>
        <div className="whyhire-flex">

          <div className="whyhire-div">
            <p className="hire-number" >01</p>
            <div className="hire-innerflex">
              <img src={clock} alt="clock icon" className="hire-icon" />
              <h3 className="flext-title">
                Save Time. <br /> Reduce Hiring Costs.
              </h3>
            </div>
            <p className="flex-p" >
              Our large talent network consists of top engineering talent that
              have undergone our rigorous vetting process ensuring that you get
              the best match for your talent needs.
            </p>
          </div>

          <div className="whyhire-div">
            <p className="hire-number" >02</p>
            <div className="hire-innerflex">
              <img src={star} alt="clock icon" className="hire-icon" />
              <h3 className="flext-title">
                Highly Qualified. <br /> Pre-vetted Talents.
              </h3>
            </div>
            <p className="flex-p" >
              Our large talent network consists of top engineering talent that
              have undergone our rigorous vetting process ensuring that you get
              the best match for your talent needs.
            </p>
          </div>

          <div className="whyhire-div">
            <p className="hire-number" >03</p>
            <div className="hire-innerflex" >
              <img src={headphone} alt="clock icon" className="hire-icon" />
              <h3 className="flext-title">
                Continuous and <br /> Support
              </h3>
            </div>
            <p className="flex-p" >
              Our large talent network con sists of top engineering talent that
              have undergone our rigorous vetting process ensuring that you get
              the best match for your talent needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyHire;
