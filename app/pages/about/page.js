"use client";
import React from "react";

const AboutPage = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#000",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    color: "#999",
    marginBottom: "20px",
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    color: "#777",
    lineHeight: "1.6",
    maxWidth: "800px",
    marginBottom: "20px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#3498db",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to Game Pad!</h1>
      <p style={paragraphStyle}>
        Get ready to explore our vast universe of free games, all instantly
        playable and accessible from all your devices, anytime, anywhere. Be
        happy with yourself in the exciting world of online games with Game Pad,
        the world-leading gaming platform dedicated to providing unlimited fun
        for gamers across the globe.
      </p>
      <p style={paragraphStyle}>
        Explore our vast universe of free games, instantly playable and
        accessible on all your devices, anytime, anywhere!
      </p>
      <button style={buttonStyle} onClick={() => (window.location.href = "/")}>
        Start Playing Now
      </button>
    </div>
  );
};

export default AboutPage;
