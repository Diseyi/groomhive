import React from "react";
import SponsorModal from "../../../components/sponsorModal/SponsorModal";
import './SponsorSection.css';

const SponsorSection = () => {
  return (
    <div className="testiomonial-container">
      <section className="testiomonial-section">
        <h2 className="testiomonial-section-title center-text">Sponsor a Hiver</h2>
        <p className="center-text p-testiomonial" >
          Our training programme is rigorous and hands-on, making it difficult
          for many of our students to earn a living while going through the
          program simultaneously.
        </p>
        <div className="testimonial-flex">
          <SponsorModal  
          title="Month"
          amount="#120,000" 
          />

          <SponsorModal 
           title="Yeah"
           amount="#120,000"
          />
          <SponsorModal 
           title="Custom"
           amount="#120,000"
          />
        </div>
      </section>
    </div>
  );
};

export default SponsorSection;
