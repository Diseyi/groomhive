import React from "react";
import userimage from "../../assets/Ellipse.png";
import "./TestimonialModal.css";

const TestimonialModal = () => {
  return (
    <div className="testimony-modal" >
      <div className="client-testimony">
        <p className="testimony">
          "We are a Fintech company, with a large team. As with similar
          companies in Nigeria acquiring well-trained software engineers was a
          challenge. When we heard about the Decagon Fellowship Program, we
          decided to subscribe to it to bridge this gap. The engineers from the
          fellowship settled in quickly and were able to contribute to the team
          right away.{" "}
        </p>
      </div>
      <div className="username-container">
        <div className="image-wrapper">
          <img src={userimage} alt="user" className="client-image" />
          <h3 className="client-name">Chijioke Dozie</h3>
          <p className="client-title">Engineering Manager, Amsterdam</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialModal;
