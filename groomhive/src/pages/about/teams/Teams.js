import React from "react";
import PictureModal from "../../../components/pictureModal/PictureModal";
import './Teams.css';

const Teams = () => {
  return (
    <div className="teams-container">
      <section className="teams-section">
        <h2 className="teams-section-title">Our Groom Team</h2>
        <div className="teams-title">
            <button className="teams" >Groom Chiefs</button>
            <button className="teams" >Board Of Directors</button>
            <button className="teams" >Board of Advisors</button>
        </div>
        <div className="teams-flex">
          <PictureModal />
          <PictureModal />
          <PictureModal />
          <PictureModal />
          <PictureModal />
          <PictureModal />
        </div>
      </section>
    </div>
  );
};

export default Teams;
