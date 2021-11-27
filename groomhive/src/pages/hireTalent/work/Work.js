import React from "react";
import "./Work.css";
import image from "../../../assets/work.png";

const Work = () => {
  return (
    <div className="work-section">
      <div className="drive-section-title">
        <h2 className="drive-title">Uderstanding how it works</h2>
        
      </div>
      <div className="drive-flex">
        <img src={image} alt="lady with a laptop" className="drive-left" />
        <div className="drive-right">
          <div className="goals-flex">
            <div className="goals-column">
              <div className="drive-options">
                <h3 className="flex-work-title">Step 1</h3>
                <p className="work-light">
                  Our large talent network consists of top engineering talent
                  that have undergone our rigorous vetting process ensuring that
                  you get the best match for your talent needs.
                </p>
              </div>

              <div className="drive-options">
                <h3 className="flex-work-title">Step 1</h3>
                <p className="work-light">
                Our large talent network consists of top engineering talent
                  that have undergone our rigorous vetting process ensuring that
                  you get the best match for your talent needs.
                </p>
              </div>
            </div>

            <div className="goals-column">
              <div className="drive-options">
                <h3 className="flex-work-title">Step 1</h3>
                <p className="work-light">
                Our large talent network consists of top engineering talent
                  that have undergone our rigorous vetting process ensuring that
                  you get the best match for your talent needs.
                </p>
              </div>

              <div className="drive-options">
                <h3 className="flex-work-title">Step 1</h3>
                <p className="work-light">
                Our large talent network consists of top engineering talent
                  that have undergone our rigorous vetting process ensuring that
                  you get the best match for your talent needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
