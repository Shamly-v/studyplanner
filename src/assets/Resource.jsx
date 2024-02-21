import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import Taskbar from "../components/Taskbar";
import "./Resource.css";

const Resource = () => {
  const [resourceData, setResourceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/resource");
        const data = await response.json();
        setResourceData(data.events || []); // Ensure events field exists and handle empty array
      } catch (error) {
        console.error("Error fetching resource data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="contentbox">
      <Navbar active="resources" />
      <Taskbar />
      <div className="big-container">
        <h1 className="heading">Resource Title</h1>
        <div className="inner-container">
          <div className="content-container">
            {resourceData.length > 0 ? (
              <ul>
                {resourceData.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>No resource data available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
