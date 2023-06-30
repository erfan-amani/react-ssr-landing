import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Home component</h1>
      <button
        onClick={() => {
          console.log("clicked");
        }}
      >
        Click here
      </button>
    </div>
  );
};

export default Home;
