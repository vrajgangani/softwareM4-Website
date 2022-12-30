import React from "react";
import { Facebook, Instagram, Twitch, Twitter } from "react-bootstrap-icons";
import T1 from "./Images/team1.jpg";
import T2 from "./Images/team2.jpg";
import T3 from "./Images/team3.jpg";
import T4 from "./Images/team4.jpg";
import OfficeImage from "./Images/background3.jpg";
import "./Main6.scss";

export const Main6 = () => {
  const teamData = [
    { name: "John Smith", photo: <T1 />, position: "Programmer" },
    { name: "Sarah Palmer", photo: <T2 />, position: "Manager" },
    { name: "Adam Swift", photo: <T3 />, position: "Analyst" },
    { name: "Helen Smith", photo: <T4 />, position: "Designer" },
  ];
  return (
    <>
      <section
        className="team"
        style={{ padding: "100px 0px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="team-header text-center pb-lg-5 pb-md-4 pb-sm-3 p-2  ">
                <h6 className="opacity-75">Experts</h6>
                <h1>
                  <strong>Our Team Members</strong>
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            {teamData.map((data, index) => {
              console.log(data);
              return (
                <div className="col-12 col-md-6 col-lg-3 col-sm-6 ">
                  <div
                    className="card custom-team-card text-center border-0 mb-0 mb-lg-0 rounded-bottom-0"
                    key={index}
                  >
                    <div className="card-body text-center">
                      <img
                        src={data.photo.type}
                        alt="person-imag"
                        className="img-fluid rounded-circle m-4"
                        style={{ height: "150px", width: "150px" }}
                      />
                      <h4>{data.name}</h4>
                      <p className="opacity-75">{data.position}</p>
                    </div>
                  </div>
                  <p className="social d-flex justify-content-center bg-white rounded-bottom">
                    <div className="team-social">
                      <Facebook />
                    </div>
                    <div className="team-social">
                      <Twitter />
                    </div>
                    <div className="team-social">
                      <Instagram />
                    </div>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="office-info"
        className="office-info-0"
      >
        <div className="container ">
          <div className="row ">
            <div className="col-12 col-lg-12 col-md-12 col-sm-12 custom-office ">
              <div className="office-image">
                <img
                  src={OfficeImage}
                  alt="office-img"
                  className="img-fluid rounded-4"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="office-info text-center py-lg-3 py-md-3 py-sm-2 bg-white rounded-3">
                  <div className=" px-lg-4 px-md-2 ">
                    <p className="about-office opacity-75">Cleints</p>
                    <p>
                      <strong>Art Museum</strong>
                    </p>
                  </div>
                  <div className=" px-lg-4 px-md-2 ">
                    <p className=" about-office opacity-75">Services</p>
                    <p>
                      <strong>Website</strong>
                    </p>
                  </div>
                  <div className=" px-lg-4 px-md-2 ">
                    <p className=" about-office opacity-75">Durations</p>
                    <p>
                      <strong>10 - 30 Days</strong>
                    </p>
                  </div>
                  <div className="px-lg-4 px-md-2 ">
                    <p className=" about-office opacity-75">Tools</p>
                    <p>
                      <strong>Figma</strong>
                    </p>
                  </div>
                  <button className="preview-button mx-lg-5 mx-md-3  px-lg-5 px-md-4  py-lg-3 py-md-2 py-sm-1 bg-dark text-white rounded ">
                    <strong>Preview</strong>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
