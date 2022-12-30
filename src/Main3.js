import React from "react";
import Image3 from "./Images/features2.jpg";
import "./Main3.scss";

export const Main3 = () => {
  return (
    <section id="id" className="about-product section-padding">
      <div className="container about-container  rounded ">
        <div className="row ">
          <div className="about-product-text col-lg-8 col-md-12  col-12 ps-lg-5 mt-md-4 m-10 text-align-center">
            <h5 className="opacity-50">
              <strong>App Download</strong>
            </h5>
            <h1>
              <strong>You can control direct from your mobile.</strong>
            </h1>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-12">
          <div className=" float-right text-center">
            <img
              src={Image3}
              className="about-product-image img-fluid rounded-top"
              alt="about-product-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
