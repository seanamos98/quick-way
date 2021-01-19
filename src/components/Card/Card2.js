import React from "react";
import "./Card.css";

const Row = ({ title, text }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{text}</p>
      <span></span>
    </div>
  );
};

export default Row;
