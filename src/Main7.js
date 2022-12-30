import React from "react";
import { ChatQuote } from "react-bootstrap-icons";
import Clinet1 from "./Images/team1.jpg";
import Clinet2 from "./Images/team2.jpg";
import Clinet3 from "./Images/team3.jpg";
import "./Main7.scss";

export const Main7 = () => {
  const Feedback = [
    {
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae curabitur libero felis ullamcorper.",
      img: <Clinet1 />,
      name: "John Smith",
      position: "Programmer",
    },
    {
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae curabitur libero felis ullamcorper.",
      img: <Clinet2 />,
      name: "Sarah Palmer",
      position: "Manager",
    },
    {
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae curabitur libero felis ullamcorper.",
      img: <Clinet3 />,
      name: "Adam Swift",
      position: "Designer",
    },
  ];

  return (
    <>
      <section
        id="feedback"
        className="feedback bg-dark"
        style={{ padding: "80px 0px" }}
      >
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header pb-4 text-white">
                <p className="opacity-75">Testimonials</p>
                <h1>
                  <strong>Our Client Feedbacks</strong>
                </h1>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {Feedback.map((item, index) => {
              return (
                <div
                  className="feedback-div col col-sm-12 col-lg-4 col-12 col-md-6 pb-md-2 px-md-3 mb-sm-3"
                  key={index}
                >
                  <div className="custom-features-card rounded-3">
                    <div className="card-body-review  p-4 ">
                      <h4 className="opacity-50">{item.review}</h4>
                    </div>
                    <div className="feedback-quote-icon">
                      <ChatQuote />
                    </div>
                    <div className="custom-fetures-text d-flex p-lg-3 p-md-3 p-sm-4 m-lg-3 m-md-3 mb-sm-4">
                      <div className="d-flex justify-content-center align-items-center ">
                        <img
                          src={item.img.type}
                          alt="clinet-img"
                          style={{ height: "65px", width: "65px" }}
                          className="rounded-circle"
                        />
                      </div>
                      <div className="about-clinet px-lg-4 px-md-3 px-sm-4">
                        <h3 className="text-dark">{item.name}</h3>
                        <h6 className="opacity-75">{item.position}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* <section className="video" style={{ padding: "100px 0px",'backgroundColor':"#DCE8EB" }} >
        <div className="container text-center">
          <div className="row">
            <div className="view-action pb-5">
              <h1>View in Action</h1>
            </div>
            <div className=" embed-responsive embed-responsive-16by9">
              <iframe
                className="custom-video embed-responsive-item rounded"
                src="https://www.youtube.com/embed/vlDzYIIOYmM"
                allowfullscreen
                title="resposive-video"
              ></iframe>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};
