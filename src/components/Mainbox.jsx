// Mainbox.js
import React, { useState } from "react";
import "./MainContentBox.css";

const Mainbox = ({ onSave }) => {
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");

  const handleSave = () => {
    onSave({ content1, content2 });
  };

  return (
    <div className="contentBox">
      <div className="content-box">
        <textarea
          name=""
          id=""
          cols="42"
          rows="10"
          value={content1}
          onChange={(e) => setContent1(e.target.value)}
          placeholder="type here.."
        ></textarea>
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
