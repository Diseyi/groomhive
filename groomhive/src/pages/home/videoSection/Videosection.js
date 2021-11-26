import React from "react";
import SubmitButton from "../../../components/submitButton/SubmitButton";
import "./VideoSection.css";

const Videosection = () => {
  return (
    <section className="video-section-container">
        <div className="sponsor-div">
          <h1 className="sponsor-title">
            We are more than just the tech Groomers, We are changing the
            narratives in the Niger Delta
          </h1>
          <p className="video-info">
            The intensive and hands-on nature of our program makes it difficult
            for our students to earn a living while actively engaged with the
            program. Kindly sponsor our initiative to help our students learn at
            ease
          </p>
          <SubmitButton value="Apply Now" id="video-button" />
        </div>
        <div className="video-container"></div>
    </section>
  );
};

export default Videosection;
