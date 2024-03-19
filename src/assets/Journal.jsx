// Journal.js
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Taskbar from "../components/Taskbar";
import Mainbox from "../components/Mainbox";

const Journal = () => {
  const [isMainboxVisible, setMainboxVisible] = useState(false);
  const [savedContent, setSavedContent] = useState([]);

  const handlePlusClick = () => {
    setMainboxVisible(true);
  };

  const handleSaveContent = (content) => {
    setSavedContent([...savedContent, content]);
    setMainboxVisible(false);
  };

  return (
    <div>
      {/* <Navbar active="journal" />
      <Taskbar /> */}
      {!isMainboxVisible && (
        <div className="plusCard" onClick={handlePlusClick}>
          {/* Add your plus sign or any UI element here */}+
        </div>
      )}
      {isMainboxVisible && <Mainbox onSave={handleSaveContent} />}
      {savedContent.map((content, index) => (
        <div key={index} className="contentCard">
          {/* Display your content here */}
          <p>{content.content1}</p>
          <p>{content.content2}</p>
        </div>
      ))}
    </div>
  );
};

export default Journal;
