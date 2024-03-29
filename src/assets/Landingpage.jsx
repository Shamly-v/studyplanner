import React from "react";
import "./Landingpage.css";
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <div className="body">
      <div className="contents-landing">
        <h1 className="planner">JAM - Study Planner</h1>
        <div className="btns">
          <Link to="/signin">
            <button className="conbtn">Sign-in</button>
          </Link>
          <Link to="/signup">
            <button className="conbtn">Sign-up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
