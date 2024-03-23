import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Taskbar from "../components/Taskbar";
import Mainbox from "../components/Mainbox";
import { useParams } from "react-router-dom";
import "./Journal.css";

const Journal = () => {
  const { userid } = useParams();
  const [isMainboxVisible, setMainboxVisible] = useState(false);
  const [isTextAreaVisible, setTextAreaVisible] = useState(false); // New state variable to track text area visibility
  const [savedContent, setSavedContent] = useState([]);

  useEffect(() => {
    const fetchJournalContent = async () => {
      try {
        const response = await fetch(`http://localhost:5000/journal/${userid}`);
        const data = await response.json();
        setSavedContent(data || []);
      } catch (error) {
        console.error("Error fetching journal content:", error);
      }
    };

    fetchJournalContent();
  }, [userid]);

  const handlePlusClick = () => {
    setMainboxVisible(true);
    setTextAreaVisible(true); // Show text area when plus sign is clicked
  };

  const handleSaveContent = async (content) => {
    try {
      const response = await fetch(`http://localhost:5000/journal/${userid}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(content),
      });
      const data = await response.json();
      setSavedContent((prevContent) => [...prevContent, data]); // Append new content to existing content
      setMainboxVisible(false);
      setTextAreaVisible(false); // Hide text area after saving content
    } catch (error) {
      console.error("Error saving journal content:", error);
    }
  };

  return (
    <div className="journal-container">
      <Navbar active="journal" />
      <Taskbar />
      <div className="journal-content">
        {Array.isArray(savedContent) &&
          savedContent.map((content, index) => (
            <div key={index} className="contentCard">
              {/* Display your content here */}
              <p>{content.content1}</p>
              <p>{content.content2}</p>
            </div>
          ))}
        {!isMainboxVisible && !isTextAreaVisible && ( // Only display plus sign if main box and text area are not visible
          <div className="plusCard" onClick={handlePlusClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-plus"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        )}
        {isMainboxVisible && <Mainbox onSave={handleSaveContent} />}
      </div>
    </div>
  );
};

export default Journal;
