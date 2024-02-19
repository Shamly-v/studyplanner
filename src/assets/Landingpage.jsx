import React from "react";
import "./Landingpage.css";
import Taskbar from "../components/Taskbar";
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';

const Landingpage = () => {
  return <div className="body">
<Taskbar/>
<div className="contents-landing">
<h1 id="planner">Study Planner</h1>
<div className="btns">
   <Link to="/signin"><button id="conbtn">Sign-in</button></Link>
<Link to="/signup">
<button id="conbtn">Sign-up</button></Link>

</div>
</div>

  </div>;
};

export default Landingpage;
