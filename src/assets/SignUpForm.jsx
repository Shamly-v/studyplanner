// SignUpForm.jsx

import React from 'react';
import './SignUpForm.css'; // Import the corresponding CSS file
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';


const SignUpForm = () => {
  return (
    <div className="bodys"><div className="bg-light min-h-screen flex flex-col">
    <div className="containers max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div className="bg-white px-6 py-8 round shadow text-black w-full">
        <h1 className="mb-8 text-xl text-center">Sign up</h1>
        <input
          type="text"
          className="input mb-4"
          name="fullname"
          placeholder="Full Name"
        />

        <input
          type="text"
          className="input mb-4"
          name="email"
          placeholder="Email"
        />

        <input
          type="password"
          className="input mb-4"
          name="password"
          placeholder="Password"
        />
        <input
          type="password"
          className="input mb-4"
          name="confirm_password"
          placeholder="Confirm Password"
        />

     <Link to="/home">   <button
          type="submit"
          className="submit"
        >
          Sign Up
        </button></Link>
        

        <div className="text-center small mt-4">
          By signing up, you agree to the{' '}
          <a className="underline" href="#">
            Terms of Service
          </a>{' '}
          and{' '}
          <a className="underline" href="#">
            Privacy Policy
          </a>
        </div>
      </div>

    
    </div>
  </div></div>
  );
};

export default SignUpForm;
