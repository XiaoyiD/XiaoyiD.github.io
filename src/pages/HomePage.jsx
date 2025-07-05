import React from "react";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="homepage-container">
      <h1>Xiaoyi Du</h1>
      <p>Welcome to my portfolio site!</p>
      <img src="/headshot.jpg" alt="Xiaoyi Du" className="homepage-image" />
      <br />
      <a href="/resume.pdf" download className="homepage-resume">Download Resume</a>
    </div>
  );
}