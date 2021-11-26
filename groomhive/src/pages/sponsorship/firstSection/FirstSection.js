import React from "react";
import SubmitButton from "../../../components/submitButton/SubmitButton";
import sponsorimage1 from "../../../assets/sponsor-image1.png";
import sponsorimage2 from "../../../assets/sponsor-image2.png";
import sponsorimage3 from "../../../assets/sponsor-image3.png";
import './FirstSection.css';

const FirstSection = () => {
  return (
    <section className="home-container">
      <div className="flex-container">
        <div className="left">
          <h1 className="bold-title">
            We are more than just the tech Groomers, We are changing the
            narratives in the Niger Delta
          </h1>
          <p className="more-info">
            The intensive and hands-on nature of our program makes it difficult
            for our students to earn a living while actively engaged with the
            program. Kindly sponsor our initiative to help our students learn at
            ease
          </p>
          <div className="flex-button">
            <SubmitButton value="Apply Now" id="dark-blue" />
            <SubmitButton value="See How" id="light-blue" />
          </div>
        </div>
        <div className="top-flex">
        <div className="top-column" >
          <img src={sponsorimage1} alt="grid" className="top-image"  />
        </div>
        <div className="top-column">
          <img src={sponsorimage2} alt="grid" className="top-image" />
          <img src={sponsorimage3} alt="grid" className="top-image" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default FirstSection;
