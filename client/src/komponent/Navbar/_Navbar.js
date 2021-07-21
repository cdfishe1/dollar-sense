import React from "react";
import * as ReactBootStrap from "react-bootstrap";

import { BrowserRouter as Router, Link } from "react-router-dom";

import "./style.css";

const NavBar = () => {
  return (
    <div className="App">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="xl"
        bg="dark"
        variant="dark"
      >
        <ReactBootStrap.Navbar.Brand style={{ color: "#74C69D" }} href="/">
          dollarSense
        </ReactBootStrap.Navbar.Brand>

        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>

            <ReactBootStrap.Nav.Link href="/about">
              About
            </ReactBootStrap.Nav.Link>

            <ReactBootStrap.Nav.Link href="/learning">
              Learning
            </ReactBootStrap.Nav.Link>

            <ReactBootStrap.Nav.Link href="/budget">
              Budget
            </ReactBootStrap.Nav.Link>

            <ReactBootStrap.Nav.Link href="/goals">
              Goals
            </ReactBootStrap.Nav.Link>

            <ReactBootStrap.Nav.Link href="/dashboard">
              Dashboard
            </ReactBootStrap.Nav.Link>

            <ReactBootStrap.Nav.Link href="/login">
              Login
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <Link to="/"></Link>

            <ReactBootStrap.Nav.Link
              eventKey={2}
              href=""
            ></ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
};

export default NavBar;

