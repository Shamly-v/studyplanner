import Navbar from "../components/Navbar";
import React from "react";
import Taskbar from "../components/Taskbar";
import "./Preference.css"

const Preference = () => {
  return (
    <div className="prefBox">
      <Navbar active='preferences'/>
      <Taskbar />

      <div className="App">
        <div className="content">
          <h1>PREFERENCES</h1>
          <div className="form-group">
            <label>Weekly Available Days</label>
            <input type="text" />
          </div>
         <div className="time"> <div className="form-group">
            <label>Start Time</label>
            <input type="time" />
          </div>  <div className="form-group">
            <label>End Time</label>
            <input type="time" />
          </div></div>
          <div className="form-group">
            <label>Syllabus</label>
            <input type="file" />
          </div>
          <div className="form-group">
            <label>Start Date</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>End Date</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Preferred Dates</label>
            <input type="date" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preference;
