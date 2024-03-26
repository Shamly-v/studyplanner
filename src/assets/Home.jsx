import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./Home.css";
import Navbar from "../components/Navbar";
import Taskbar from "../components/Taskbar";

const Home = () => {
  const { userid } = useParams();
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [daysLeft, setDaysLeft] = useState(0);
  const [todaySchedule, setTodaySchedule] = useState("");
  const [todayVideo, setTodayVideo] = useState("");
  const [name, setName] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/dashboard_data/${userid}`
        );
        const data = response.data;
        setProgressPercentage(data.progress_percentage);
        setDaysLeft(data.days_left);
        setTodaySchedule(data.today_schedule);
        setTodayVideo(data.today_video);
        setName(data.name);
        setDataLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
        setDataLoaded(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="main">
      <Taskbar />
      <Navbar />
      {dataLoaded ? (
        <>
          <center>
            <div className="name">
              <h3>Hi, {name}</h3>
            </div>
          </center>
          <div className="home">
            <div className="card">
              <h3>Progress in Study</h3>
              <div
                className="progress-bar"
                style={{
                  width: `100%`,
                  background: `linear-gradient(90deg, #5cb85c ${progressPercentage}%, #fff ${progressPercentage}%)`,
                }}
              ></div>
            </div>
            <div className="card">
              <h3>Number of Days Left</h3>
              <p>{daysLeft}</p>
            </div>
            <div className="card-c">
              <h3>Today's Schedule</h3>
              <p>Topic: {todaySchedule.topic}</p>
              <p>Start Time: {todaySchedule.start_time}</p>
              <p>End Time: {todaySchedule.end_time}</p>
            </div>
            <div className="card-c">
              <h3>Today's Video</h3>
              <iframe
                width="300"
                height="10rem"
                src={
                  todayVideo
                    ? `https://www.youtube.com/embed/${todayVideo[0].video_id}`
                    : ""
                }
                title="Today's Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </>
      ) : (
        <div className="set-preferences">
          <h3>No data available.</h3>
          <Link to={`/preferences/${userid}`} className="btn">
            Set Preferences
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
