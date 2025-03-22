import React from "react";
import { useNavigate } from "react-router-dom";
import "../style.css"


const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <h1>Paradise Nursery</h1>
      <p>Find the perfect houseplants for your home!</p>
      <button onClick={() => navigate("/products")}>Get Started</button>
    </div>
  );
};

export default LandingPage;

