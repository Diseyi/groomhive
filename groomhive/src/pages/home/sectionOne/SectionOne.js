import React from "react";
import GridPicture from "../../../components/gridPicture/GridPicture";
import SubmitButton from "../../../components/submitButton/SubmitButton";
import './SectionOne.css'

const SectionOne = () => {
  return (
      <section className="home-container">
        <div className="flex-container">
          <div className="left">
            <h1 className="bold-title">
            Empowering young talents and upscalling mindset through leadership and technology.
            </h1>
            <p className="more-info">
              We are changing narratives, empowering young talents and
              upscalling mindset through leadership and technology.
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

export default SectionOne;
