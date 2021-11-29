import React from "react";
import PraiseModal from "../../../components/praiseModal/PraiseModal";
import "./TestimonialSection.css";

const TestimonialSection = () => {
  return (
    <div className="testiomonial-container">
      <section className="testiomonial-section">
        <h2 className="testiomonial-section-title">
          We are bridging the skill gap in the Niger Delta Region of Nigeria.
        </h2>
        <div className="testimonial-flex">
          <PraiseModal />
          <PraiseModal />
          <PraiseModal />
        </div>
      </section>
    </div>
  );
};

export default TestimonialSection;
