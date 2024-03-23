import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Taskbar from "../components/Taskbar";
import "./Preference.css";
import { useParams } from "react-router-dom";

const Preference = () => {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    numRevisionsNeeded: "",
    preferableTime: "",
    weekdaysSchedule: "",
    weekendSchedule: "",
    syllabus: null,
  });
  const { userid } = useParams();
  const [existingPreferences, setExistingPreferences] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchUserPreferences = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/preference/${userid}`
        );
        const data = await response.json();
        setExistingPreferences(data);
      } catch (error) {
        console.error("Error fetching user preferences:", error);
      }
    };

    fetchUserPreferences();
  }, [userid]);

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
    formDataToSend.append("startDate", formData.startDate);
    formDataToSend.append("endDate", formData.endDate);
    formDataToSend.append("numRevisionsNeeded", formData.numRevisionsNeeded);
    formDataToSend.append("preferableTime", formData.preferableTime);
    formDataToSend.append("weekdaysSchedule", formData.weekdaysSchedule);
    formDataToSend.append("weekendSchedule", formData.weekendSchedule);
    formDataToSend.append("syllabus", formData.syllabus);

    try {
      const response = await fetch(
        `http://localhost:5000/preference/${userid}`,
        {
          method: "POST",
          body: formDataToSend,
        }
      );
      if (response.ok) {
        console.log("Form submitted successfully");
        setEditMode(false); // Hide the form after submission
        setExistingPreferences(formData); // Update existing preferences
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const renderExistingPreferences = () => {
    return (
      <div className="existing-preferences-container">
        <h2>Existing Preferences</h2>
        <div className="existing-preferences">
          <p>
            <strong>Start Date:</strong> {existingPreferences.startDate}
          </p>
          <p>
            <strong>End Date:</strong> {existingPreferences.endDate}
          </p>
          <p>
            <strong>Number of Revisions Needed:</strong>{" "}
            {existingPreferences.numRevisionsNeeded}
          </p>
          <p>
            <strong>Preferable Time:</strong>{" "}
            {existingPreferences.preferableTime}
          </p>
          <p>
            <strong>Weekdays Schedule:</strong>{" "}
            {existingPreferences.weekdaysSchedule}
          </p>
          <p>
            <strong>Weekend Schedule:</strong>{" "}
            {existingPreferences.weekendSchedule}
          </p>
          {existingPreferences.syllabus && (
            <p>
              <strong>Syllabus:</strong> {existingPreferences.syllabus.name}
            </p>
          )}
        </div>
        <button onClick={handleEditClick}>Edit</button>
      </div>
    );
  };

  return (
    <div className="pref-container">
      <Navbar active="preferences" />
      <Taskbar />
      <div className="pref-content">
        <h1>Preferences</h1>
        {!editMode && existingPreferences ? (
          renderExistingPreferences()
        ) : (
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="pref-form"
          >
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
              <label>Number of Revisions Needed</label>
              <input
                type="number"
                name="numRevisionsNeeded"
                value={formData.numRevisionsNeeded}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Preferable Time</label>
              <select
                name="preferableTime"
                value={formData.preferableTime}
                onChange={handleChange}
              >
                <option value="morning">Morning</option>
                <option value="night">Night</option>
              </select>
            </div>
            <div className="form-group">
              <label>Weekdays Schedule</label>
              <select
                name="weekdaysSchedule"
                value={formData.weekdaysSchedule}
                onChange={handleChange}
              >
                <option value="relaxed">Relaxed</option>
                <option value="balanced">Balanced</option>
              </select>
            </div>
            <div className="form-group">
              <label>Weekend Schedule</label>
              <select
                name="weekendSchedule"
                value={formData.weekendSchedule}
                onChange={handleChange}
              >
                <option value="balanced">Balanced</option>
                <option value="tight">Tight</option>
              </select>
            </div>
            <div className="form-group">
              <label>Syllabus</label>
              <input type="file" name="syllabus" onChange={handleFileChange} />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Preference;
