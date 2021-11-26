import React from "react";
import Sponsorship from "../Sponsorship";
import './SponsorSection.css';

const SponsorSection = () => {
  return (
    <div className="testiomonial-container">
      <section className="testiomonial-section">
        <h2 className="testiomonial-section-title">Sponsor a Hiver</h2>
        <p>
          Our training programme is rigorous and hands-on, making it difficult
          for many of our students to earn a living while going through the
          program simultaneously.
        </p>
        <div className="testimonial-flex">
          <Sponsorship />
          <Sponsorship />
          <Sponsorship />
        </div>
      </section>
    </div>
  );
};

export default SponsorSection;
