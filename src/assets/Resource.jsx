import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import Taskbar from "../components/Taskbar";
import "./Resource.css";
import { useParams } from "react-router-dom";

const Resource = () => {
  const [resourceData, setResourceData] = useState([]);
  const { userid } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/resource/${userid}`
        );
        const data = await response.json();
        setResourceData(data.event_videos || []); // Use correct key for event videos
      } catch (error) {
        console.error("Error fetching resource data:", error);
      }
    };

    fetchData();
  }, [userid]);

  return (
    <div className="main">
      <Navbar active="resources" />
      <Taskbar />
    <div className="contentbox">
      <div className="resource-container">
        <h1 className="heading">Resources</h1>
        <ul className="video-list">
          {Object.entries(resourceData).map(([event, videos]) => (
            <li key={event}>
              <h2>{event}</h2>
              <div className="video-cards">
                {videos.map((video, index) => (
                  <div className="video-card" key={index}>
                    <div className="video-details">
                      {/* <h3 className="video-title">{video.title}</h3>
                      <p className="video-topic">{video.topic}</p>
                      <p className="video-description">{video.description}</p> */}
                      <iframe
                        src={`https://www.youtube.com/embed/${video.video_id}`}
                        title={video.title}
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Resource;
