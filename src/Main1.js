import React from "react";
import "./Main1.scss";
import Background from "./Images/background1.jpg";


export const Main1 = () => {
  return (
    <div
      className="outer-main1"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.6)), url(${Background})`,
      }}
    >
      <div className="inner-main1">
        <div className="text-main1 ">
          <h5>Developer Company </h5>
          <h1 className="company-product"><strong>Software App</strong></h1>
          <h5 className="compony-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan
            porttitor egestas fermentum nulla.
          </h5>
        </div>
        <div className="button-main1">
          <button className="service-button">Our service</button>
          <button className="learnmore-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};
