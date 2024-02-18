import React from "react";
import Navbar from "../components/Navbar";
import Taskbar from "../components/Taskbar";
import MainContentBox from "../components/MainContentBox";

const Home = () => {
  return (
    <div className="home_container">
      <Navbar active="home"/>
      <div className="task_container">
        <Taskbar />
        <div className="containers">
          <MainContentBox />
          <MainContentBox />
        </div>
      </div>
    </div>
  );
};

export default Home;
