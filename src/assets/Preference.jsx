import Navbar from "../components/Navbar";
import React, { useState } from "react";
import Taskbar from "../components/Taskbar";
import "./Preference.css";

const Preference = () => {
  const [formData, setFormData] = useState({
    weeklyAvailableDays: "",
    startTime: "",
    endTime: "",
    syllabus: null,
    startDate: "",
    endDate: "",
    preferredDates: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, syllabus: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("weeklyAvailableDays", formData.weeklyAvailableDays);
    formDataToSend.append("startTime", formData.startTime);
    formDataToSend.append("endTime", formData.endTime);
    formDataToSend.append("syllabus", formData.syllabus);
    formDataToSend.append("startDate", formData.startDate);
    formDataToSend.append("endDate", formData.endDate);
    formDataToSend.append("preferredDates", formData.preferredDates);

    try {
      const response = await fetch("http://localhost:5000/", {
        // Check if this is the correct URL for your Flask backend
        method: "POST",
        body: formDataToSend,
      });
      if (response.ok) {
        console.log("Form submitted successfully");
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="prefBox">
      <Navbar active="preferences" />
      <Taskbar />

      <div className="App">
        <div className="content">
          <h1>PREFERENCES</h1>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {" "}
            {/* Ensure proper enctype */}
            <div className="form-group">
              <label>Weekly Available Days</label>
              <input
                type="text"
                name="weeklyAvailableDays"
                value={formData.weeklyAvailableDays}
                onChange={handleChange}
              />
            </div>
            <div className="time">
              <div className="form-group">
                <label>Start Time</label>
                <input
                  type="time"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>End Time</label>
                <input
                  type="time"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Syllabus</label>
              <input type="file" name="syllabus" onChange={handleFileChange} />
            </div>
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Preferred Dates</label>
              <input
                type="date"
                name="preferredDates"
                value={formData.preferredDates}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Preference;
