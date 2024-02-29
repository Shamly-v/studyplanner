// Journal.js
import "./Journal.css"
import Navbar from "../components/Navbar";
import React, { useState } from "react";
import Taskbar from "../components/Taskbar";
import Mainbox from "../components/Mainbox";

const Journal = () => {
  const [isMainboxVisible, setMainboxVisible] = useState(false);

  const handlePlusClick = () => {
    setMainboxVisible(true);
  };

  return (
    <div>
      <Navbar active="journal" />
      <Taskbar />
      {!isMainboxVisible && (
        <div className="plusCard" onClick={handlePlusClick}>
          {/* Add your plus sign or any UI element here */}
          +
        </div>
      )}
      {isMainboxVisible && <Mainbox />}
    </div>
  );
};

export default Journal;
