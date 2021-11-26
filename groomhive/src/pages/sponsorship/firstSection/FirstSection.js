import React from "react";
import GridPicture from "../../../components/gridPicture/GridPicture";
import SubmitButton from "../../../components/submitButton/SubmitButton";
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
        <GridPicture />
      </div>
    </section>
  );
};

export default FirstSection;
