// Resource.js

import Navbar from "../components/Navbar";
import React from "react";
import Taskbar from "../components/Taskbar";
import "./Resource.css";

const Resource = () => {
  return (
    <div className="contentbox">
      <Navbar active='resources'/>
      <Taskbar />
      <div className="big-container">
        <h1 className="heading">Lorem</h1>
        <div className="inner-container">
          <div className="content-container">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam a repellat ullam mollitia, aliquam rerum neque inventore
              accusantium quibusdam optio deleniti excepturi magni. Esse
              nesciunt quia iure harum? Esse, vitae.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam a repellat ullam mollitia, aliquam rerum neque inventore
              accusantium quibusdam optio deleniti excepturi magni. Esse
              nesciunt quia iure harum? Esse, vitae.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam a repellat ullam mollitia, aliquam rerum neque inventore
              accusantium quibusdam optio deleniti excepturi magni. Esse
              nesciunt quia iure harum? Esse, vitae.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam a repellat ullam mollitia, aliquam rerum neque inventore
              accusantium quibusdam optio deleniti excepturi magni. Esse
              nesciunt quia iure harum? Esse, vitae.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam a repellat ullam mollitia, aliquam rerum neque inventore
              accusantium quibusdam optio deleniti excepturi magni. Esse
              nesciunt quia iure harum? Esse, vitae.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam a repellat ullam mollitia, aliquam rerum neque inventore
              accusantium quibusdam optio deleniti excepturi magni. Esse
              nesciunt quia iure harum? Esse, vitae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
