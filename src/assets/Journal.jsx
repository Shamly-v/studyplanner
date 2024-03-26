import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Taskbar from "../components/Taskbar";
import Mainbox from "../components/Mainbox";
import { useParams } from "react-router-dom";
import "./Journal.css";

const Journal = () => {
  const { userid } = useParams();
  const [isMainboxVisible, setMainboxVisible] = useState(false);
  const [isTextAreaVisible, setTextAreaVisible] = useState(false);
  const [savedContent, setSavedContent] = useState([]);
  const [displayContent, setDisplayContent] = useState([]);
  console.log(displayContent);

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
    setTextAreaVisible(false);
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
      setSavedContent((prevContent) => [...prevContent, data]);
      setMainboxVisible(false);
      setTextAreaVisible(false);
    } catch (error) {
      console.error("Error saving journal content:", error);
    }
  };

  const handleEdit = (index) => {
    // Copy the saved content array
    const updatedContent = [...savedContent];
    // Set the editable property to true for the specified card
    updatedContent[index].editable = true;
    // Update state with the modified content
    setSavedContent(updatedContent);
  };

  const handleDelete = async (index) => {
    try {
      // Delete the card from the backend using its unique identifier
      await fetch(`http://localhost:5000/journal/${userid}/${index}`, {
        method: "DELETE",
      });
      // Remove the card from the savedContent state
      const updatedContent = savedContent.filter((_, i) => i !== index);
      setSavedContent(updatedContent);
    } catch (error) {
      console.error("Error deleting journal content:", error);
    }
  };

  const handleUpdate = async (index, updatedContent) => {
    try {
      console.log(updatedContent + "consoled");
      const response = await fetch(
        `http://localhost:5000/journal/${userid}/${index}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedContent),
        }
      );
      const data = await response.json();
      console.log("Updated journal content:", data);

      // Update the savedContent state with the updated content
      const updatedSavedContent = [...savedContent];
      updatedSavedContent[index] = data;
      setSavedContent(updatedSavedContent);

      // Set editable property back to false
      updatedContent.editable = false;
    } catch (error) {
      console.error("Error updating journal content:", error);
    }
  };

  return (
    <div className="main">
      <Navbar active="journal" />
      <Taskbar />
      <div className="journal-container">
        <div className="journal-content">
          {Array.isArray(savedContent) &&
            savedContent.map((content, index) => (
              <div key={index} className="contentCard">
                {content.editable ? (
                  <div>
                    <textarea
                      defaultValue={content.content2}
                      onChange={(e) => {
                        const updatedContent = {
                          ...content,
                          content2: e.target.value,
                        };
                        setDisplayContent(updatedContent);
                      }}
                    />
                    <button
                      onClick={() => {
                        const updatedContent = {
                          displayContent,
                          editable: false,
                        };
                        console.log(updatedContent);
                        handleUpdate(index, displayContent);
                      }}
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div className="cardbox">
                    <p id="title">{content.title}</p>
                    <p>{content.content2}</p>
                    <div className="cardButtons">
                      <button onClick={() => handleEdit(index)}>Edit</button>
                      <button onClick={() => handleDelete(index)}>
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          {!isMainboxVisible && !isTextAreaVisible && (
            <div className="plusCard" onClick={handlePlusClick}>
              <span>Add</span>
            </div>
          )}
          {isMainboxVisible && <Mainbox onSave={handleSaveContent} />}
        </div>
      </div>
    </div>
  );
};

export default Journal;
