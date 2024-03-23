import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE90HdKSc18gr0ZoP3GMqvavHo3AWsB9c",
  authDomain: "jam-mate.firebaseapp.com",
  projectId: "jam-mate",
  storageBucket: "jam-mate.appspot.com",
  messagingSenderId: "708758396661",
  appId: "1:708758396661:web:f8fffc02d026171106afbc",
  measurementId: "G-CRXFXWGW2Y",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Login successful, redirect or do something else
      console.log("Login");
      const userId = userCredential.user.uid;
      // Redirect to user-specific dashboard
      window.location.href = `/dashboard/${userId}`;
    } catch (error) {
      // Handle errors
      console.error("Login error:", error.message);
      setError(error.message);
    }
  };

  return (
    <section className="login-section">
      <div className="login-container">
        {/* Your image container */}
        <div className="form-container">
          <form>
            <div className="input-container">
              <label htmlFor="emailInput">Email address</label>
              <input
                className="input-login"
                type="text"
                id="emailInput"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-container">
              <label htmlFor="passwordInput">Password</label>
              <input
                className="input-login"
                type="password"
                id="passwordInput"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="button-container">
              <button
                type="button"
                className="login-button"
                onClick={handleLogin}
              >
                Login
              </button>

              <p className="register-link">
                Don't have an account?{" "}
                <Link to="/signup" className="register-link-text">
                  Register
                </Link>
              </p>
            </div>

            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
