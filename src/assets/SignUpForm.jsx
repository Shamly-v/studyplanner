import React, { useState } from "react";
import "./SignUpForm.css";
import { Link, Navigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

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
const db = getFirestore();

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Save user's name to Firestore under their user ID
      await setDoc(doc(db, "users", userCredential.user.uid), {
        name: name,
        email: email,
      });

      setSuccessMessage("Sign up successful!");
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  };

  // Redirect to signin route if sign up was successful
  if (successMessage) {
    return <Navigate to="/signin" />;
  }

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
            <form onSubmit={handleSignUp}>
              {" "}
              {/* Added onSubmit handler */}
              <input
                type="text"
                className="input mb-4"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button type="submit" className="submit">
                Sign Up
              </button>
            </form>

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
