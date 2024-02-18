import Navbar from "../components/Navbar";
import React from "react";
import Taskbar from "../components/Taskbar";
import MainContentBox from "../components/MainContentBox";

const Journal = () => {
  return (
    <div>
      <Navbar active="journal" />
      <Taskbar />
      <MainContentBox />
      <MainContentBox />{" "}
    </div>
  );
};

export default Journal;
