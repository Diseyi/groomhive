import React from "react";
import HiveProgram from "../../../components/hiveProgram/HiveProgram";
import image from "../../../assets/image.png";
import image2 from "../../../assets/image2.png";
import image3 from "../../../assets/image3.png";
import image4 from "../../../assets/image4.png";
import image5 from "../../../assets/image5.png";
import image6 from "../../../assets/image6.png";
import "./CodeWar.css"

const CodeWar = () => {
  return (
    <div className="codewar-container">
      <section className="codewar-section">
        <h2 className="codewar-section-title">HiveWoman Programs</h2>
        <p className="codewar-p" >
          At Semicolon Africa, we believe that women are equally capable and
          should be enabled to be at the forefront of technological development
        </p>
        <div className="codewar-flex">
          <HiveProgram image={image} />
          <HiveProgram image={image2} />
          <HiveProgram image={image3} />
          <HiveProgram image={image4} />
          <HiveProgram image={image5} />
          <HiveProgram image={image6} />
        </div>
      </section>
    </div>
  );
};

export default CodeWar;
