import React from "react";
import PickMeals from "../Assets/Intelligent .png";
import ChooseMeals from "../Assets/Insights.png";
import DeliveryMeals from "../Assets/Scalable .png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Intelligent Policy Analysis",
      text: "AI-driven analysis of existing policies, identifying gaps and opportunities for optimization",
    },
    {
      image: ChooseMeals,
      title: "Hyperlocal Actionable Insights",
      text: "Generate insights from local market data to inform policy decisions.",
    },
    {
      image: DeliveryMeals,
      title: "Scalable across geographies",
      text: "Our platform is designed to be easily adapted to different regions and regulatory environments.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Meet our Decision Platform</p>
        <h1 className="primary-heading">Transform Your Policies </h1>
        <p className="primary-text">
          Our AI-powered platform streamlines the entire policy lifecycle, from creation to implementation.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;