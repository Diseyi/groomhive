import React from "react";
import PictureModal from "../../../components/pictureModal/PictureModal";
import picture1 from "../../../assets/picture.png";
import picture2 from "../../../assets/picture2.png";
import picture3 from "../../../assets/picture3.png";
import picture4 from "../../../assets/picture4.png";
import picture5 from "../../../assets/picture5.png";
import picture6 from "../../../assets/picture6.png";
import './Teams.css';

const Teams = () => {
  return (
    <div className="teams-container">
      <section className="teams-section">
        <h2 className="teams-section-title">Our Groom Team </h2>
        <div className="teams-title">
            <button id="teams" >Groom Chiefs</button>
            <button id="teams" >Board Of Directors</button>
            <button id="teams" >Board of Advisors</button>
        </div>
        <div className="teams-flex">
          <PictureModal picture={picture1} name="Herman Defoe" title="Senior UX Designer" />
          <PictureModal picture={picture2} name="Andrew Graham" title="Senior IxD" />
          <PictureModal picture={picture3} name="Angela McKenzie" title="Senior IxD" />
          <PictureModal picture={picture4} name="Herman Defoe" title="Senior UX Designer" />
          <PictureModal picture={picture5}  name="Andrew Graham" title="Senior IxD" />
          <PictureModal picture={picture6} name="Angela McKenzie" title="Senior IxD" />
        </div>
      </section>
    </div>
  );
};

export default Teams;
