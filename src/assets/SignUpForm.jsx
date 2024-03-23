import React, { useState, useEffect } from "react";
import "./SignUpForm.css";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
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

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        const userId = user.uid;
        // Redirect to user-specific dashboard
        window.location.href = `/dashboard/${userId}`;
      } else {
        // User is signed out.
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth, history]);

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // SignUp successful, set success message
      setSuccessMessage("Sign up successful!");
    } catch (error) {
      // Handle errors
      console.error(error.message);
      setError(error.message);
    }
  };

  return (
    <div className="bodys">
      <div className="bg-light min-h-screen flex flex-col">
        <div className="containers max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 round shadow text-black w-full">
            <h1 className="mb-8 text-xl text-center">Sign up</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {successMessage && (
              <p className="text-green-500 mb-4">{successMessage}</p>
            )}
            <input
              type="text"
              className="input mb-4"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="input mb-4"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="password"
              className="input mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            <button type="button" className="submit" onClick={handleSignUp}>
              Sign Up
            </button>

            <div className="text-center small mt-4">
              By signing up, you agree to the{" "}
              <a className="underline" href="#">
                Terms of Service
              </a>{" "}
              and{" "}
              <a className="underline" href="#">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="mt-4 text-sm">
            Already have an account? <Link to="/signin">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
