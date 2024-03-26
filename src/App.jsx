// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/Home";
import Preference from "./assets/Preference";
import Calendar from "./assets/Calendar";
import Resource from "./assets/Resource";
import Journal from "./assets/Journal";
import Landingpage from "./assets/Landingpage";
import SignInForm from "./assets/Login";
import SignUpForm from "./assets/SignUpForm";
import Profile from "./assets/Profile";
// Make sure the path is correct based on your project structure


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/dashboard/:userid" element={<Home />} />
        <Route path="/preferences/:userid" element={<Preference />} />
        <Route path="/calendar/:userid" element={<Calendar />} />
        <Route path="/resources/:userid" element={<Resource />} />
        <Route path="/journal/:userid" element={<Journal />} />
        <Route path="/profile/:userid" element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
