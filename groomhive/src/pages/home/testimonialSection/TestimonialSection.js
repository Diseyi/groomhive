import React from "react";
import TestimonyModal from "../../../components/testiomonyModal/TestimonyModal";
import "./TestimonialSection.css";

const TestimonialSection = () => {
  return (
    <div className="testiomonial-container">
      <section className="testiomonial-section">
        <h2 className="testiomonial-section-title">
          We are bridging the skill gap in the Niger Delta Region of Nigeria.
        </h2>
        <div className="testimonial-flex">
          <TestimonyModal />
          <TestimonyModal />
          <TestimonyModal />
        </div>
      </section>
    </div>
  );
};

export default TestimonialSection;
