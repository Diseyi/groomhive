import React from "react";
import "./GridPicture.css";

const GridPicture = (props) => {
  return (
      <div className="grid-row">
        <div className="grid-column" >
          <img src={props.picture1} alt="grid" className="grid-imag"  />
          <img src={props.picture3} alt="grid" className="grid-imag" />
        </div>
        <div className="grid-column">
          <img src={props.picture2} alt="grid" className="grid-imag" />
          <img src={props.picture4} alt="grid" className="grid-imag" />
        </div>
      </div>
  );
};

export default GridPicture;
