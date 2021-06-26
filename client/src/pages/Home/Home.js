import React from "react";
import Signup from "../../komponent/Signup";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Dollar Sense</h1>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>

        <Signup />
        </div>
      </Container>
    </div>
  );
};

export default Home;
