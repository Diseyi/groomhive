import React from "react";
import { Link } from "react-router-dom";
import useState from "react";

const Navbar = (props) => {
  return (
    <section className ="h-screen fixed top-0 w-full bg-white border-2 " >
         <button className="pt-10 flex items-end " onClick={props.onClick} >Close</button>{" "}
      <div className="flex flex-col items-center justify-around  " >
        <Link to="/hivewoman" style={{ textDecoration: "none" }}>
          {" "}
          <button className="text-2xl m-10 ">HiveWoman</button>{" "}
        </Link>
        <Link to="/sponsorship" style={{ textDecoration: "none" }}>
          <button className="text-2xl m-10">Sponsorship</button>{" "}
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          {" "}
          <button className="text-2xl m-10">About Us</button>{" "}
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
        <button className="text-1xl m-10 border-2 p-3 pl-7 pr-7 ">Apply Now</button>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
        <button className="text-1xl m-10 border-2 p-3 pl-7 pr-7 ">Apply Now</button>
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
