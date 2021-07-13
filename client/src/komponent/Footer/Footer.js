// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

// function Footer() {
//   let date = new Date();
//   let year = date.getFullYear();
//   return (
//     <Container fluid className="footer">
//       <Row>
//         <Col md="4" className="footer-copywright">
//           <h3>Designed and Developed by Javiann Marrero, Charles Fisher and Natalie Finnegan</h3>
//         </Col>
//         <Col md="4" className="footer-copywright">
//           <h3>Copyright © {year} NW</h3>
//         </Col>
//         <Col md="4" className="footer-body">
//           <ul className="footer-icons">
//             <li className="social-icons">
//               <a
//                 href="https://github.com/javiistacks"
//                 style={{ color: "black" }}
//               >
//                 <AiFillGithub />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href="https://twitter.com/JaviannMarrero"
//                 style={{ color: "black" }}
//               >
//                 <AiOutlineTwitter />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href="https://www.linkedin.com/in/javiann-marrero-b6bb66130/"
//                 style={{ color: "black" }}
//               >
//                 <FaLinkedinIn />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href="https://www.instagram.com/javii23xo/"
//                 style={{ color: "black" }}
//               >
//                 <AiFillInstagram />
//               </a>
//             </li>
//           </ul>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Footer;

import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./Footerstyles.css";
import * as ReactBootStrap from "react-bootstrap";


const Footer = () => {
return (
	<Box>
	<h1>                      
		Dollar Sense
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Writing</FooterLink>
			<FooterLink href="#">Internships</FooterLink>
			<FooterLink href="#">Coding</FooterLink>
			<FooterLink href="#">Teaching</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Uttar Pradesh</FooterLink>
			<FooterLink href="#">Ahemdabad</FooterLink>
			<FooterLink href="#">Indore</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span >
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span >
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
