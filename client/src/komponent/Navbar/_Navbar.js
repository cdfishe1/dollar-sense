import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

  import "./style.css";

  // import {Link} from "react-router-dom";

  // as={Link}

const NavBar = () => {
    return(
        <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
  {/* <Link to="/">   */}
  <ReactBootStrap.Navbar.Brand style={{ color: "#74C69D" }} href="/">dollarSense</ReactBootStrap.Navbar.Brand>
  {/* </Link> */}
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> 
    {/* <Link to="/"> */}
    <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
    {/* </Link> */}
    {/* <Link to="/about"> */}
    <ReactBootStrap.Nav.Link href="/about">About</ReactBootStrap.Nav.Link>
    {/* </Link> */}
    {/* <Link to="/learning"> */}
    <ReactBootStrap.Nav.Link href="/learning">Learning</ReactBootStrap.Nav.Link>
    {/* </Link> */}
    {/* <Link as={Link} to="/budget"> */}
    <ReactBootStrap.Nav.Link href="/budget">Budget</ReactBootStrap.Nav.Link>
    {/* </Link> */}
    {/* <Link as={Link} to="/goals"> */}
    <ReactBootStrap.Nav.Link href="/goals">Goals</ReactBootStrap.Nav.Link>
    {/* </Link> */}

    {/* <Link as={Link} to="/dashboard"> */}
    <ReactBootStrap.Nav.Link href="/dashboard">Dashboard</ReactBootStrap.Nav.Link>
    {/* </Link> */}
    
    {/* <Link to="/dashboard">
    <ReactBootStrap.Nav.Link href="../../pages/Dashboard/Dashboard.js">Dashboard</ReactBootStrap.Nav.Link>
    </Link> */}

    {/* <Link to="/login"> */}
    <ReactBootStrap.Nav.Link href="../komponent/Login">Login</ReactBootStrap.Nav.Link>
    {/* </Link> */}

      {/* <ReactBootStrap.NavDropdown title="Signed In " id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item to="/dashboard" href="../../pages/Dashboard">Dashboard</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item to="/goals" href="../../pages/Budget/Budget.js">Goals</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown> */}
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    <Link to="/">
    {/* <ReactBootStrap.Nav.Link href="#deets">User ID</ReactBootStrap.Nav.Link> */}
    </Link>
    {/* <Link to="/"> */}
    <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
        {/* Dank memes */}
      </ReactBootStrap.Nav.Link>
    {/* </Link> */}
    </ReactBootStrap.Nav>
    
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;