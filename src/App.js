import React from "react";
import Tweet from "./Tweet";

function App() {
  return (
    <div className="app">
      <Tweet name="IronMan" massage="Marvel Trinity member 01" Likes="80M" />
      <Tweet name="Thor" massage="Marvel Trinity member 02" Likes="60M" />
      <Tweet
        name="CaptainAmerica"
        massage="Marvel Trinity member 03"
        Likes="70M"
      />
    </div>
  );
}

export default App;
