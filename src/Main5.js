import React from "react";
import { ArrowRight, BoxSeam, Gear, Palette } from "react-bootstrap-icons";
import Img1 from "./Images/features1.jpg";
import Img2 from "./Images/features2.jpg";
import Img3 from "./Images/features3.jpg";
import "./Main5.scss";

export const Main5 = () => {
  const Features = [
    { img: <Img1 />, features: "Software, Interface", heading: "Development" },
    { img: <Img2 />, features: "Software, Design", heading: "Design" },
    { img: <Img3 />, features: "Software, Interface", heading: "Optimization" },
  ];
  const Careers = [
    { icon: <Gear />, text: "Development" },
    { icon: <Palette />, text: "Design" },
    { icon: <BoxSeam />, text: "Optimization" },
  ];
  return (
    <>
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
                <div
                  className="col col-sm-12 col-lg-4 col-12 col-md-6 pb-md-2 px-md-3 mb-sm-3"
                  key={index}
                >
                  <div className="custom-features-card rounded-3">
                    <div className="card-body-image  ">
                      <img
                        src={item.img.type}
                        alt="features-imag"
                        className="card-body-image img-fluid rounded-top "
                      />
                    </div>
                    <div className="features-arrow">
                      <ArrowRight />
                    </div>
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

      
      <section
        id="careers"
        className="careers bg-dark"
        style={{ padding: "100px 0px" }}
      >
        <div className="container career-container bg-white rounded">
          <div className="row career-container">
            <div className="text-careers p-lg-4 p-sm-4 p-md-4 ">
              <h6 className="opacity-75">Careers</h6>
              <h1>Join our team to create best digital solutions.</h1>
            </div>
          </div>
          <div className="careers-tools col-12 col-md-12 col-lg-12 col-sm-12 p-sm-2  ">
            {Careers.map((item, index) => {
              return (
                <div
                  className="card card-career-container d-flex flex-row justify-content-between p-2 m-3 opacity-75"
                  key={index}
                >
                  <h4 className=" my-auto">{item.icon}</h4>
                  <h5 className="text-start w-100 p-2 my-auto">{item.text}</h5>
                  <ArrowRight
                    className="my-auto"
                    style={{ fontSize: "2rem" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
