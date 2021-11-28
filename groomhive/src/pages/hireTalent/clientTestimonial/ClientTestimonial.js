import React from 'react'
import TestimonialModal from '../../../components/testimonialModal/TestimonialModal';
import "./ClientTestimonial.css";

const ClientTestimonial = () => {
    return (
        <div className="testiomonial-container">
      <section className="testiomonial-section">
        <h2 className="testiomonial-section-title">
          We are bridging the skill gap in the Niger Delta Region of Nigeria.
        </h2>
        <div className="testimonial-flex">
        
          <TestimonialModal />
          <TestimonialModal />
          <TestimonialModal />
        </div>
      </section>
    </div>
    )
}

export default ClientTestimonial
