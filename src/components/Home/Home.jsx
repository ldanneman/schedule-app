import React from "react";
import MainCards from "./MainCards";
import "./home.css"
import Login from "../Login";

function Home() {
  return (
    <div className="home-container">
      <MainCards />
      <Login />
    </div>
  );
}

export default Home;
