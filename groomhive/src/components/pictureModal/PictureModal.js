import React from "react";
import picture from "../../assets/picture.png";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import './PictureModal.css';

const PictureModal = (props) => {
  return (
    <section className="picture-container">
      <img src={picture} alt="profile of a person" className="picture" />
      <div className="connect">
        <div className="socials">
          <img src={linkedin} alt="profile of a person" className="icon" />
          <img src={twitter} alt="profile of a person" className="icon" />
        </div>
        <p className="name">Andrew Graham</p>
        <p className="nametitle">Senior Director</p>
      </div>
    </section>
  );
};

export default PictureModal;
