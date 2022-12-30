import React from "react";
import * as Icon from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "./Images/logo.png";

import "./Navbar.scss";

const Naavbar = () => {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="custom-navbar p-3 sticky-top">
          <Container fluid clas>
            <img src={Logo} alt="Brand Logo" height={"48px"} width={"48px"} />
            <Navbar.Brand href="#Brand">
              <h4>
                <strong>SoftwareM4</strong>
              </h4>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="d-flex justify-content-center align-items-center">
                  <img
                    src={Logo}
                    alt="Brand Logo"
                    height={"48px"}
                    width={"48px"}
                  />
                  <Navbar.Brand href="#Brand">
                    <h4>
                      <strong>SoftwareM4</strong>
                    </h4>
                  </Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1">
                  <Nav.Link className="custom-navbar-items" href="#home">
                    Home
                  </Nav.Link>
                  <Nav.Link className="custom-navbar-items" href="#about">
                    About
                  </Nav.Link>
                  <Nav.Link className="custom-navbar-items" href="#services">
                    Services
                  </Nav.Link>
                  <Nav.Link className="custom-navbar-items" href="#contact">
                    Contact
                  </Nav.Link>
                </Nav>
                <ul className="custom-navbar-icons text-center">
                  <li>
                    <a href="#facebook" alt="facebook-icon">
                      <Icon.Facebook color="black" size="1.7rem" />
                    </a>
                  </li>
                  <li>
                    <a href="#twitter" alt="twitter-icon">
                      <Icon.Twitter color="black" size="1.7rem" />
                    </a>
                  </li>
                  <li>
                    <a href="#instagram" alt="instagram-icon">
                      <Icon.Instagram color="black" size="1.7rem" />
                    </a>
                  </li>
                </ul>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Naavbar;
