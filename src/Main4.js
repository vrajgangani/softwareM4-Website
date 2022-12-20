import React from "react";
import { CheckCircle } from "react-bootstrap-icons";

export const Main4 = () => {
  const goal = [
    "App Design & Research",
    "Development & Testing",
    "App Design & Research",
    "Development & Testing",
    "App Design & Research",
    "Development & Testing",
  ];
  return (
    <section
      id="id"
      className="campony-goal "
      style={{ padding: "60px 20px" }}
    >
      <div className="container campony-goal-container   ">
        <div className="row ">
          <div className="col-12 col-lg-12 col-md-12 col-sm-12 font-weight-bold">
            <h4>Our Goal</h4>
            <h6 className="opacity-50 mt-4 p-1 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              id libero vitae felis ullamcorper pharetra a non tortor. Etiam
              cursus ex id porta viverra. In hac habitasse platea dictumst.
              Etiam auctor, erat ut interdum semper, elit dui hendrerit turpis,
              quis eleifend arcu nulla vitae diam. Sed efficitur porttitor
              justo, eget mollis sem interdum sed. Quisque ornare et risus id
              bibendum. Donec faucibus sollicitudin rhoncus. Sed in porttitor
              sem. Quisque vitae mollis odio. Aenean consectetur placerat nibh,
              quis elementum orci fermentum vitae.
            </h6>
          </div>
          <div className="campony-goal-list row mt-3">
            {goal.map((items, index) => {
              return (
                <div
                  className="col-12 col-lg-4 col-md-4 col-sm-12 my-2"
                  key={index}
                >
                  <div className="d-flex ">
                    <div className="d-flex justify-content-center align-items-center mx-2">
                      <CheckCircle size={"30px"} />
                    </div>
                    <h5 className="opacity-50 m-2">{items}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
