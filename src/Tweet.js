import React from "react";
import "./App.css";

function Tweet(props) {
  return (
    <div className="tweet">
      <h3>{props.name}</h3>
      <p>{props.massage}</p>
      <h3>{props.Likes}</h3>
    </div>
  );
}

export default Tweet;
