import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function NavbarComp() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow fixed-top">
      <Container className="">
        <Navbar.Brand className="text-success fw-medium">
          <NavLink to="/">React-Bootstrap</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end w-100">
            <NavLink className="mx-1" to="/">
              Home
            </NavLink>
            <NavLink className="mx-1" to="/About">
              About
            </NavLink>
            <NavLink className="mx-1" to="/Menu">
              Menu
            </NavLink>
            <NavLink className="ms-1" to="/Contact">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
