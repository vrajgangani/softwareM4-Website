import React from "react";
import { ArrowRight } from "react-bootstrap-icons";
import Img1 from "./Images/features1.jpg";
import Img2 from "./Images/features2.jpg";
import Img3 from "./Images/features3.jpg";
import "./Main5.css";

export const Main5 = () => {
  const Features = [
    { img: <Img1 />, features: "Software, Interface", heading: "Development" },
    { img: <Img2 />, features: "Software, Design", heading: "Design" },
    { img: <Img3 />, features: "Software, Interface", heading: "Optimization" },
  ];
  return (
    <section
      id="core-features"
      className="core-features"
      style={{ padding: "100px 0px" }}
    >
      <div className="container ">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center pb-4">
              <h1>
                <strong>Core Features</strong>
              </h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {Features.map((item, index) => {
            return (
              <div className="col col-sm-12 col-lg-4 col-12 col-md-6 pb-md-2 px-md-3 mb-sm-3" key={index}>
                <div className="custom-features-card rounded-3">
                  <div className="card-body-image  ">
                    <img
                      src={item.img.type}
                      alt="features-imag"
                      className="card-body-image img-fluid rounded-top "
                    />
                        </div>
                        <div className="features-arrow"><ArrowRight/></div>
                  <div className="custom-fetures-text p-lg-3 p-md-3 p-sm-4 m-lg-3 m-md-3 mb-sm-4">
                    <h6 className="opacity-75">{item.features}</h6>
                    <h3 className="text-dark">{item.heading}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
