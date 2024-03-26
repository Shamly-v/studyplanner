import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Taskbar from "../components/Taskbar";
import axios from "axios";
import "./Calendar.css"; // Import CSS file for component styling
import { useParams } from "react-router-dom";

const Calendar = () => {
  const [schedule, setSchedule] = useState(null);
  const { userid } = useParams();

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/calendar/${userid}`
        );
        // Initialize the completed property of each task to false
        const updatedSchedule = {};
        for (const date in response.data) {
          updatedSchedule[date] = { ...response.data[date], completed: false };
        }
        setSchedule(updatedSchedule);
      } catch (error) {
        console.error("Error fetching schedule:", error);
      }
    };

    fetchSchedule();
  }, [userid]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", { month: "long", day: "numeric" });
  };

  const toggleCompleted = (date) => {
    setSchedule((prevSchedule) => {
      const updatedSchedule = { ...prevSchedule };
      updatedSchedule[date] = {
        ...updatedSchedule[date],
        completed: !updatedSchedule[date].completed,
      };
      return updatedSchedule;
    });
  };

  return (
    <div className="main">
      <Navbar active="calendar" />
      <Taskbar />
      <div className="schedule-container">
        <h1>Schedule</h1>
        <div className="schedule-items">
          {schedule &&
            Object.entries(schedule).map(([date, details], index) => (
              <div
                key={date}
                className={`schedule-item ${
                  details.completed ? "completed" : ""
                }`}
              >
                <div className="date">{formatDate(date)}</div>
                <div className="details">
                  <div className="topic">Topic: {details.topic}</div>
                  <div className="start-time">
                    Start Time: {details.start_time}
                  </div>
                  <div className="end-time">End Time: {details.end_time}</div>
                  <input
                    type="checkbox"
                    checked={details.completed}
                    onChange={() => toggleCompleted(date)}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
