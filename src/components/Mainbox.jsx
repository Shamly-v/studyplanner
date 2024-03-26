// Mainbox.js
import React, { useState } from "react";
import "./MainContentBox.css";

const Mainbox = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [content2, setContent2] = useState("");

  const handleSave = () => {
    onSave({ title, content2 });
  };

  return (
    <div className="contentBox">
      <div className="content-box">
        <input type="text" name="title" id="title" placeholder="title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="content-box">
        <textarea
          name=""
          id=""
          cols="42"
          rows="10"
          value={content2}
          onChange={(e) => setContent2(e.target.value)}
          placeholder="type here.."
        ></textarea>
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Mainbox;
