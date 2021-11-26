import React from "react";
import event1 from "../../../assets/event1.png";
import SubmitButton from "../../../components/submitButton/SubmitButton";
import "./Event.css";

const Event = () => {
  return (
    <section className="event-container">
      <div className="event-flex">
        <div className="event-left">
          <h1 className="event-title">
            Empowering young talents and upscalling mindset through leadership
            and technology.
          </h1>
          <p className="event-info">
            We are changing narratives, empowering young talents and upscalling
            mindset through leadership and technology.
          </p>
          <div className="event-button">
            <SubmitButton value="Apply Now" id="event-blue" />
          </div>
        </div>
        <img
          src={event1}
          alt="a lady looking into the laptop"
          className="event-image"
        />
      </div>

      <div className="event-container flex-row-reverse">
        <div className="event-left">
          <h1 className="event-title">
            Empowering young talents and upscalling mindset through leadership
            and technology.
          </h1>
          <p className="event-info">
            We are changing narratives, empowering young talents and upscalling
            mindset through leadership and technology.
          </p>
          <div className="event-button">
            <SubmitButton value="Apply Now" id="event-blue" />
          </div>
        </div>
        <img
          src={event1}
          alt="a lady looking into the laptop"
          className="event-image"
        />
      </div>
    </section>
  );
};

export default Event;
