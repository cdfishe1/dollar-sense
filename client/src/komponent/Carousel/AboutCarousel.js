import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container';
import "./style.css";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';


const AboutCarousel = () => {
  return (
    
<Container className = "d-flex align-items-center justify-content-center">

<Carousel>
  <Carousel.Item>
  <Link to ="/Learning">
    <img
      className="d-block w-100"
      src="assets/literacy.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <div className = "caption">
      <h3>Learn About Money!</h3>
      <p>More on budgeting, credit, savings, and more.</p>
      </div>
      
    </Carousel.Caption>
    </Link>
  </Carousel.Item>
  
  <Carousel.Item>
  <Link to="/Budget">
    <img
      className="d-block w-100"
      src="assets/kelly-sikkema-SBxdMoOY9zM-unsplash.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <div className = "caption">
      <h3>Track Your Money!</h3>
      <p>Track your money and expenses to help you save!</p>
      </div>
      
    </Carousel.Caption>
    </Link>
  </Carousel.Item>
  
  
  
  
  
  <Carousel.Item>
  <Link to ="/Goals">
    <img
      className="d-block w-100"
      src="assets/silvan-arnet-PFqfV5bn91A-unsplash.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <div className = "caption">
      <h3>Reach Your Goals!</h3>
      <p>Set goals to achieve your financial success!</p>
      </div>
      
    </Carousel.Caption>
    </Link>
  </Carousel.Item>
  
</Carousel>
</Container>
   

  )
  
  
}

export default AboutCarousel;