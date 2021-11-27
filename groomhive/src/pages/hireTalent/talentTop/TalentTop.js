import React from "react";
import SubmitButton from "../../../components/submitButton/SubmitButton";
import talent1 from "../../../assets/talent1.png";
import talent2 from "../../../assets/talent2.png";
import "./TalentTop.css";

const TalentTop = () => {
  return (
    <section className="talent-container">
      <div className="talent-flex">
        <div className="talent-left">
          <h1 className="talent-title">
            Scale and build innovative and sustainable solutions with top vetted
            digital talent
          </h1>
          <p className="talent-info">
            Enjoy unwaven talent commitment and gain access to the top 0.5% tech
            talent.
          </p>

          <SubmitButton value="Apply Now" id="talent-button" />
        </div>
        <div className="talent-right">
          <img src={talent1} alt="a man" className="talent-image" />
          <img src={talent2} alt="a man" className="talent-image" />
        </div>
      </div>
    </section>
  );
};

export default TalentTop;
