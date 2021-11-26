import React from "react";
import image from "../../../assets/image.png";
import "./Drive.css";

const Drive = () => {
  return (
    <div className="drive-section">
      <div className="drive-section-title">
        <h2 className="drive-title">What Drives Us</h2>
        <p className="drive-info">
          Already, we have shown and proven that digital technology is integral
          to improving lives and increasing socio-economic potentials, with many
          of our graduating students already making positive economic and social
          differences to the companies they work for. Your help can let us do
          more. Help sponsor initiatives that will empower more young people in
          technology and economic prosperity across Africa.
        </p>
      </div>
      <div className="drive-flex">
        <img src={image} alt="lady with a laptop" className="drive-left" />
        <div className="drive-right">
        <h3>Our Goals in numbers</h3>
          <div className="drive-options">
            <h3 className="numbers" >400%</h3>
            <p className="details-light" >
            Increase in employability
            </p>
          </div>

          <div className="drive-options">
            <h3 className="numbers" >400%</h3>
            <p className="details-light" >
            Increase in employability
            </p>
          </div>

          <div className="drive-options">
            <h3 className="numbers" >400%</h3>
            <p className="details-light" >
            Increase in employability
            </p>
          </div>

          <div className="drive-options">
            <h3 className="numbers" >400%</h3>
            <p className="details-light" >
            Increase in employability
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Drive;
