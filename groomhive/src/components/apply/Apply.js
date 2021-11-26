import React from "react";
import SubmitButton from "../submitButton/SubmitButton";
import './Apply.css'

const Apply = () => {
  return (
    <div className="apply">
      <h2 className="apply-title" >Ready to Become A Hiver </h2>
      <p>Probably the best decison you'll ever make</p>
      <SubmitButton value="Apply Now" id="button-color" />
    </div>
  );
};

export default Apply;
