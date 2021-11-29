import React from "react";
import user from "../../assets/Ellipse.png";
import './PraiseModal.css';

const PraiseModal = (props) => {
  return (
    <section className="praise-container">
      <img src={user} alt="praise" className="praiseuser-image" />
     
      <p>
        @groomHive is absolutely bananas. I used to work in sociology and I made
        what I thought was decent money for a full-time professional. <br />The only
        way to make more was to take out student loans and spend two years in
        grad school for a $15,000/year raise.
      </p>
      <p className="praisefull-name">Boma Daniels</p>
      <p  className="praisetime-stamp" >
        <span className="praiseuser-name">@bomdan</span>{" "}
        January 12, 2021
      </p>
    </section>
  );
};

export default PraiseModal;
