
// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/Home";
import Preference from "./assets/Preference";
import Calendar from "./assets/Calendar";
import Resource from "./assets/Resource";
import Journal from './assets/Journal';
import SignInForm from "./assets/Login";
// Make sure the path is correct based on your project structure




import React from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<SignInForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Pre" element={<Preference />} />
        <Route path="/cal" element={< Calendar/>} />
        <Route path="/Reso" element={<Resource />} />
        <Route path="/jou" element={<Journal />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;

