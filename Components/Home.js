import React from "react";
import BannerBackground from "../Assets/Banner.png";
import BannerImage from "../Assets/policies.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
AI-Powered Credit and Risk Decisioning
          </h1>
          <p className="primary-text">
A next-generation platform built for credit and risk teams. Optimize strategies, enhance decision workflows, and deploy autonomous agents to navigate risk with speed and accuracy.

          </p>
          <button className="secondary-button">
            Policies Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;