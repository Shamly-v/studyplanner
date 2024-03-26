import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Profile.css"; // Import your CSS file
import Navbar from "../components/Navbar";
import { signOut, getAuth } from "firebase/auth";

const Profile = () => {
  const { userid } = useParams();
  const auth = getAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [uploadText, setUploadText] = useState("Upload Profile Picture");
  const [imageUploaded, setImageUploaded] = useState(false); // Track image upload status

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/profile/${userid}`
        );
        setUserData(response.data);
        setImageUploaded(!!response.data.image); // Set image upload status based on fetched data
      } catch (error) {
        setError("Failed to fetch user data");
      }
    };

    fetchUserData();
  }, [userid]);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user from Firebase Authentication
      navigate("/signin"); // Redirect to sign-in page after successful logout
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      await axios.post(
        `http://localhost:5000/upload_image/${userid}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Refresh user data after image upload
      const response = await axios.get(
        `http://localhost:5000/profile/${userid}`
      );
      setUserData(response.data);
      setUploadText("Change Profile Picture");
      setImageUploaded(true); // Update image upload status
    } catch (error) {
      setError("Failed to upload image");
    }
  };

  return (
    <div className="profile-container">
      <Navbar />
      <h1 className="profile-heading">Profile</h1>
      {error && <p className="error-message">{error}</p>}
      <div className="profile-card">
        <div className="profile-image-container">
          <img
            src={userData.image || "person.svg"}
            alt="Profile"
            className="profile-image"
          />
          <label htmlFor="image-upload" className="upload-label">
            {imageUploaded ? "Change Profile Picture" : uploadText}
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="image-upload"
          />
        </div>
        <div className="profile-details">
          <p className="profile-info">Name: {userData.name}</p>
          <p className="profile-info">Email: {userData.email}</p>
        </div>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
