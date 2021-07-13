// import React, { useState } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import logo from "../Assets/logo2.png";
// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
// import { CgGitFork } from "react-icons/cg";
// import { useAuth } from "../../contexts/Authcontext";
// import {
//   AiFillStar,
//   AiOutlineHome,
//   AiOutlineFundProjectionScreen,
//   AiOutlineUser,
// } from "react-icons/ai";

// import { CgFileDocument } from "react-icons/cg";

// function NavBar() {
//   const [expand, updateExpanded] = useState(false);
//   const [navColour, updateNavbar] = useState(false);
//   const { currentUser, logout } = useAuth();

//   function scrollHandler() {
//     if (window.scrollY >= 20) {
//       updateNavbar(true);
//     } else {
//       updateNavbar(false);
//     }
//   }

//   window.addEventListener("scroll", scrollHandler);

//   return (
//     <Navbar
//       expanded={expand}
//       fixed="middle"
//       expand="md"
//       className={navColour ? "sticky" : "navbar"}
//     >
//       <Container>
//         <Navbar.Brand href="/">
//           <img src={logo} className="img-fluid logo" alt="brand" />
//         </Navbar.Brand>
//         <Navbar.Toggle
//           aria-controls="responsive-navbar-nav"
//           onClick={() => {
//             updateExpanded(expand ? false : "expanded");
//           }}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ml-auto" defaultActiveKey="#home">
//             <Nav.Item>
//               <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
//                 <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/about"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <AiOutlineUser style={{ marginBottom: "2px" }} /> About
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/Budget"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <AiOutlineFundProjectionScreen
//                   style={{ marginBottom: "2px" }}
//                 />{" "}
//                 Budget
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/invest"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <CgFileDocument style={{ marginBottom: "2px" }} /> Invest
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/dashboard"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <CgFileDocument style={{ marginBottom: "2px" }} /> Dashboard
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/learning"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <CgFileDocument style={{ marginBottom: "2px" }} /> Learning
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/goals"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <CgFileDocument style={{ marginBottom: "2px" }} /> Goals
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item className="fork-btn">
//               <Button
//                 href="https://github.com/cdfishe1/dollar-sense"
//                 target="_blank"
//                 className="fork-btn-inner"
//               >
//                 <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
//                 <AiFillStar style={{ fontSize: "1.1em" }} />
//               </Button>
//             </Nav.Item>
//           </Nav>
          
//         {/* <Navbar.Text>
//       Signed in as: <a href="/login"> {currentUser.email} {logout} </a>
//       </Navbar.Text> */}

//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


// import * as ReactBootStrap from "react-bootstrap";
// import logo from "../Assets/logo2.png";

// import { navBar, NavDropdown,  } from "react-bootstrap/Navbar";


const NavBar = () => {
  return(

<Navbar bg="dark" expand="lg">
  <Navbar.Brand href="#">Dollar Sense</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="../../pages/Home/Home.js">Home</Nav.Link>
      <Nav.Link href="../../pages/About/About.js">About</Nav.Link>
      <Nav.Link href="../../pages/Learning/Learning.js">Learning</Nav.Link>
      <NavDropdown title="Signed in" id="navbarScrollingDropdown">
        <NavDropdown.Item href="../../pages/Dashboard">Dashboard</NavDropdown.Item>
        <NavDropdown.Item href="../../pages/Budget/Budget.js">Budget</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="../../pages/Invest">Invest</NavDropdown.Item>
      </NavDropdown>

      
      {/* <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav> */}


      <Nav.Link href="#" disabled>
        User:
      </Nav.Link>
    </Nav>
    {/* <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </Navbar.Collapse>
</Navbar>
//   {/* <Nav.Link href="#features">Features</Nav.Link>
//       <Nav.Link href="../../pages/Home/Home.js">Home</Nav.Link>
//       <Nav.Link href="../../pages/About/About.js">About</Nav.Link>
//       <Nav.Link href="../../pages/Budget/Budget.js">Budget</Nav.Link>
//       <Nav.Link href="../../pages/Invest">Invest</Nav.Link>
//       <Nav.Link href="../../pages/Dashboard">Dashboard</Nav.Link>
//       <Nav.Link href="../../pages/Learning">Learning</Nav.Link>

//       <Nav.Link src={home}>Home</Nav.Link>
// </> */}
)
}


export default NavBar;