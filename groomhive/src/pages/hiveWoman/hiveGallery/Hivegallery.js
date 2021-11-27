import React from 'react';
import "./HiveGallery.css";
// import background from "../../../assets/gallery-background.png";
import gallery1 from "../../../assets/gallery1.png";
import gallery2 from "../../../assets/gallery2.png";
import gallery3 from "../../../assets/gallery3.png";
import gallery4 from "../../../assets/gallery4.png";
import gallery5 from "../../../assets/gallery5.png";
import gallery6 from "../../../assets/gallery6.png";

const Hivegallery = () => {
    return (
        <section className="hive-gallery" >
            <h2 className="gallery-title">HiveWoman Event Gallary</h2>
            <div className="gallery-row">
        <div className="gallery-column" >
          <img src={gallery1} alt="gallery-grid" className="gallery-image"  />
          <img src={gallery4} alt="gallery-grid" className="gallery-image" />
        </div>
        <div className="gallery-column">
          <img src={gallery2} alt="gallery-grid" className="gallery-image" />
          <img src={gallery5} alt="gallery-grid" className="gallery-image" />
         
        </div>
        <div className="gallery-column">
          <img src={gallery3} alt="gallery-grid" className="gallery-image" />
          <img src={gallery6} alt="gallery-grid" className="gallery-image" />
        </div>
      </div>
      <button className="see-more" >See more on our Instagram Page</button>
        </section>
    )
}

export default Hivegallery
