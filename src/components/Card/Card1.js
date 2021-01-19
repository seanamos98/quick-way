import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "./Card.css";

const Row = ({ title, text }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{text}</p>
      <div>
        <span></span>
      </div>
    </div>
  );
};

export default Row;
