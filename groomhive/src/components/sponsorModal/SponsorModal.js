import React from "react";
import "./SponsorModal.css";
import arrow from "../../assets/arrow.svg";

const SponsorModal = (props) => {
  return (
    <div className="sponsor-modal">
      <h3 className="sponsor-title">{props.title}</h3>
      <div className="sponsor-flex">
        <p className="sponsor-p">{props.amount}</p>
        <img src={arrow} alt="arrow" className="arrow" />
      </div>
      <div className="sponsor-innerflex">
        <label>Feeding</label>
        <div>
         <span className={props.className}>{props.minus} </span>
          <label className="pr-1 pl-1" >
            <span className="numof sponsor">1 {" "} </span>Hiver
          </label>
          <span className={props.className}>{props.plus} </span>
        </div>
      </div>

      <div className="sponsor-innerflex">
        <label>Feeding</label>
        <div>
        <span className={props.className}>{props.minus} </span>
          <label className="pr-1 pl-1" >
            <span className="numof sponsor">1 {" "} </span>Hiver
          </label>
          <span className={props.className}>{props.plus} </span>
        </div>
      </div>

      <div className="sponsor-innerflex">
        <label>Feeding</label>
        <div>
        <span className={props.className}>{props.minus} </span>
          <label className="pr-1 pl-1" >
            <span className="numof sponsor">1 {" "} </span>Hiver
          </label>
          <span className={props.className}>{props.plus} </span>
        </div>
      </div>

      <div className="sponsor-innerflex">
        <label>Feeding</label>
        <div className=" " >
        <span className={props.className}>{props.minus} </span>
          <label className="pr-1 pl-1" >
            <span className="numof sponsor">1 {" "} </span>Hiver
          </label>
          <span className={props.className}>{props.plus} </span>
        </div>
      </div>

      <button className="sponsor-submit">
        Sponsor <span className="result">1 {" "} </span> Hiver
      </button>
      
      <p className="ps">
        ***₦45,000 feeds a Hiver, ₦15,000 transports a Hiver, ₦10,000 upkeep 1
        Hiver
      </p>
    </div>
  );
};

export default SponsorModal;
