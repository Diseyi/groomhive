import React from "react";
import SubmitButton from "../../../components/submitButton/SubmitButton";
import "./TopSection.css";

const TopSection = () => {
  return (
    <section className="topsection-container">
        <div className="topsection-div">
          <h1 className="topsection-title">
            We are changing narratives, empowering young talents and upscalling
            mindset through leadership and technology.
          </h1>
          <p className="other-info">Sorely for the Niger Delta Youth</p>
          <SubmitButton value="Sponsor a Hiver" id="topsection-button" />
        </div>
    </section>
  );
};

export default TopSection;
