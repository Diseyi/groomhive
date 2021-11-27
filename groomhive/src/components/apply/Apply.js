import React from "react";
import SubmitButton from "../submitButton/SubmitButton";
import './Apply.css'

const Apply = (props) => {
  return (
    <div className="apply">
      <h2 className="apply-title" >Ready to Become A Hiver </h2>
      <p className="apply-p" >{props.apply}</p>
      <SubmitButton value="Apply Now" id="button-color" />
    </div>
  );
};

export default Apply;
