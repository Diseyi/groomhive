import React from "react";
import picture1 from '../../assets/home-image1.png';
import picture2 from '../../assets/home-image2.png';
import picture3 from '../../assets/home-image3.png';
import picture4 from '../../assets/home-image4.png';
import "./GridPicture.css";

const GridPicture = () => {
  return (
      <div className="row">
        <div className="column" >
          <img src={picture1} alt="grid" className="first"  />
          <img src={picture3} alt="grid" className="third" />
        </div>
        <div className="column">
          <img src={picture2} alt="grid"  />
          <img src={picture4} alt="grid"  />
        </div>
      </div>
  );
};

export default GridPicture;
