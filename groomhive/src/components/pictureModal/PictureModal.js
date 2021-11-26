import React from "react";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import './PictureModal.css';

const PictureModal = (props) => {
  return (
    <section className="picture-container">
      <img src={props.picture} alt="profile of a person" className="picture" />
      <div className="connect">
        <div className="socials">
          <img src={linkedin} alt="profile of a person" className="icon" />
          <img src={twitter} alt="profile of a person" className="icon" />
        </div>
        <p className="name">{props.name}</p>
        <p className="nametitle">{props.title}</p>
      </div>
    </section>
  );
};

export default PictureModal;
