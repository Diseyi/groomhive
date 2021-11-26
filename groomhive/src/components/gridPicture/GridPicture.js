import React from "react";
import "./GridPicture.css";

const GridPicture = (props) => {
  return (
      <div className="row">
        <div className="column" >
          <img src={props.picture1} alt="grid" className="first"  />
          <img src={props.picture3} alt="grid" className="third" />
        </div>
        <div className="column">
          <img src={props.picture2} alt="grid"  />
          <img src={props.picture4} alt="grid"  />
        </div>
      </div>
  );
};

export default GridPicture;
