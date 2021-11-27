import React from "react";
import hivewoman1 from "../../../assets/hivewoman1.png";
import hivewoman2 from "../../../assets/hivewoman2.png";
import "./HiveStory.css"

const HiveStory = () => {
  return (
    <section className="hivestory-container">
      <div className="hivestory-flex hivestory1">
        <div className="hivestory-left">
            <label className="case">THE SOLUTION </label>
          <h1 className="hivestory-title">Wide Digital <br /> Gender Gap</h1>
          <p className="hivestory-info">
            As the Africa continent continues to undergo rapid ICT development,
            it is also noticeable that the number of women accompanying this
            growth is also low. As of 2020, women in tech make up about 28.8% of
            the tech workforce; an increase from 25.9% in 2018 and 26.2% in
            2019. In Africa, reports show that it could take 24 years; 12 years
            more than the rest of the world, for women to have equal
            representation in tech.
          </p>
        </div>
        <img
          src={hivewoman2}
          alt="a lady looking into the laptop"
          className="hivestory-image"
        />
      </div>

      <div className="hivestory-flex hivestory2">
        <div className="hivestory-left">
        <label className="case">THE SOLUTION </label>
          <h1 className="hivestory-title">
            Groomhive’s <br /> “HiveWoman”
          </h1>
          <p className="hivestory-info">
            At Grommhive, we believe that women are equally capable and should
            be enabled to be at the forefront of technological development and
            advancement. This is why we started the S.W.i.T community.
          </p>
        </div>
        <img
          src={hivewoman1}
          alt="a lady looking into the laptop"
          className="hivestory-image"
        />
      </div>
    </section>
  );
};

export default HiveStory;
