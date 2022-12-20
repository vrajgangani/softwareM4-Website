import React from "react";
import "./Main2.css";
import Background1 from "./Images/features1.jpg";
import { HandIndexThumb, Palette, PeopleFill } from "react-bootstrap-icons";


export const Main2 = () => {
  const solution = [
    { logo: <Palette />, name: "Design" },
    { logo: <HandIndexThumb />, name: "Usage" },
    { logo: <PeopleFill />, name: "Testing" },
  ];
  return (
    <div className="outer-main2">
      <div
        className="image-main2 "
        // style={{ backgroundImage: ` url(${Background1})` }}
      >
        <img src={Background1} className="img-fluid image-main2" alt="responsive-img-b2" />
      </div>
      <div className="text-main2">
        <h6 style={{ opacity: "0.5" }}>Core Features</h6>
        <div className="camponyDiscription">
          Best Business Software Solution
        </div>
        <div className="campony-solution">
          {solution.map((item, index) => {
            return (
              <div className="compony-solution-products" key={index}>
                <div className="campony-solution-products-logo">
                  {item.logo}
                </div>
                <h6>{item.name}</h6>
              </div>
            );
          })}
        </div>
        <h5 style={{ opacity: "0.5" }} className="company-h5-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan
          porttitor egestas fermentum nulla.
        </h5>
        <button className="read-more-button">Read More</button>
      </div>
    </div>
  );
};
