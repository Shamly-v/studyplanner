import React from "react";
import Navbar from "../components/Navbar";
import Taskbar from "../components/Taskbar";
import MainContentBox from "../components/MainContentBox";

const Home = () => {
  return (
    <div>
      <Navbar active="home" />
      <Taskbar />
      <MainContentBox />
      <MainContentBox />{" "}
    </div>
  );
};

export default Home;
