import React from "react";
import GridPicture from "../../../components/gridPicture/GridPicture";
import SubmitButton from "../../../components/submitButton/SubmitButton";
import woman1 from "../../../assets/woman1.png";
import woman2 from "../../../assets/woman2.png";
import woman3 from "../../../assets/woman3.png";
import woman4 from "../../../assets/woman4.png";
import "./HiveGridTop.css";

const HiveGridTop = () => {
  return (
    <section className="hivewoman-container">
      <div className="flex-hive">
        <div className="hivewoman-left">
          <h1 className="hivewoman-title">
            Empowering Women in Tech Across Niger Delta.
          </h1>
          <p className="hivewoman-info">
            We are fostering opportunities and advancements for women into tech
            through programs, mentorship, and community networks.
          </p>
          <div className="flex-button">
            <SubmitButton value="Join HiveWoman" id="hive-button" />
          </div>
        </div>
        <GridPicture
        picture1={woman1}
        picture2={woman2}
        picture3={woman3}
        picture4={woman4}
        />
      </div>
    </section>
  );
};

export default HiveGridTop;
