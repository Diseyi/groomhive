import React from "react";
import './JoinGrromhive.css';
import image from '../../../assets/groom-image.png';
import flexible from '../../../assets/flexible.png';
import jobsourcing from '../../../assets/job-sourcing.png';
import realproduct from '../../../assets/real-product.png';
import marketready from '../../../assets/market-ready.png';

const JoinGroomhive = () => {
  return (
    <div className="join-section" >
      <div className="join-section-title" >
        <h2 className="join-title" >Why Join Groomhive?</h2>
        <p className="join-info" >
          Get the skills and experience you need to become a Software Engineer,
          in today's global market.
        </p>
      </div>
      <div className="join-flex" >
        <img src={image} alt="lady with a laptop" className="join-left" />
        <div className="join-right" >
        <div className="join-options" >
            <div className="join-options-flex" >
              <img src={flexible} alt="icon" className="join-icon" />
              <h3 className="join-h3" >Flexible Tuition Payment</h3>
            </div>
            <p className="join-p" >
              We offer flexible tuition fee payment options, so you have one
              less thing to worry.
            </p>
          </div>

          <div className="join-options" >
            <div className="join-options-flex" >
              <img src={marketready} alt="icon" className="join-icon" />
              <h3 className="join-h3" >Market Ready Curriculum</h3>
            </div>
            <p className="join-p" >
            We deliver an intensive six months training with a practical curriculum that will take anyone from zero to skilled professional.
            </p>
          </div>

          <div className="join-options" >
            <div className="join-options-flex" >
              <img src={realproduct} alt="icon" className="join-icon" />
              <h3 className="join-h3" >Real Product Experience</h3>
            </div>
            <p className="join-p" >
            As you learn, you get to work on projects so that you master the skills you need to thrive and gain employment as a software engineer or in other tech-related roles.
            </p>
          </div>

          <div className="join-options" >
            <div className="join-options-flex" >
              <img src={jobsourcing} alt="icon" className="join-icon" />
              <h3 className="join-h3" >Job Sourcing</h3>
            </div>
            <p className="join-p" >
            We have a pool of hiring partners and destinations that you can get deployed to, by the end of the programme.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinGroomhive;
