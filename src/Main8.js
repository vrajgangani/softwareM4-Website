import React from "react";
import './Main7.scss'

export const Main8 = () => {
  return (
    <section className="login" style={{ padding: "100px 0px" }}>
      <div
        className="container rounded-4 p-lg-5 p-md-4 p-sm-3 py-4"
        style={{ backgroundColor: "#DCE8EB" }}
      >
        <div className="row ps-4">
          <div className="login-header py-lg-4 p-md-4 p-sm-3 p-4">
            <h6 className="opacity-75">Estimate For Projects</h6>
            <h1>
              <strong>Share Work Details</strong>
            </h1>
          </div>
          <div className="login-form row text-center">
            <div className="form-outline col-12 col-lg-4 col-md-4 col-sm-12 py-3 ">
              <input
                type="text"
                id="typeText"
                className="form-control p-3 border-light"
                placeholder="Full Name"
              />
            </div>
            <div className="form-outline col-12 col-lg-4 col-md-4 col-sm-12 py-3 ">
              <input
                type="email"
                id="typeEmail"
                className="form-control p-3 border-light"
                placeholder="Email "
              />
            </div>
            <div className="form-outline col-12 col-lg-4 col-md-4 col-sm-12 py-3">
              <input
                type="text"
                id="typeText"
                className="form-control p-3 border-light"
                placeholder="Subject"
              />
            </div>
            <div className="form-outline col-12 py-3">
              <textarea
                className="form-control p-3 border-light"
                id="textAreaExample"
                rows="4"
                placeholder="Work Details"
              ></textarea>
            </div>
            <div className=" d-flex justify-content-lg-end justify-content-center">
              <button
                className="subscribe-btn  rounded px-4 py-3"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
