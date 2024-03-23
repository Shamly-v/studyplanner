import React from "react";
import Navbar from "../components/Navbar";
import Taskbar from "../components/Taskbar";
import MainContentBox from "../components/MainContentBox";
import { useParams } from "react-router-dom";

const Home = () => {
  const {userid}=useParams();
  console.log(userid);
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
