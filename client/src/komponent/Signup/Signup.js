import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/Authcontext";
import { Link, useHistory } from "react-router-dom";
import Header from "../Header/Header";
import "./style.css";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match!");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch {
      setError("Failed to create account");
    }
    setLoading(false);
  }

  return (
    <div>
      <Header />
      <Container
        className="d-flex align-items-center justify-content-center signUpPage"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <div className="card">
            <Card.Body className="signUpCard">
              <h2 className="text-center mb-4 ">Sign Up</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    className="mb-2"
                    ref={emailRef}
                    required
                  />
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    className="mb-2"
                    ref={passwordRef}
                    required
                  />
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    className="mb-2"
                    ref={passwordConfirmRef}
                    required
                  />
                </Form.Group>
                <button
                  disabled={loading}
                  className="w-100 mt-4 signUpBtn"
                  type="submit"
                >
                  {" "}
                  Sign Up
                </button>
              </Form>
            </Card.Body>
          </div>
          <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/login">Log In!</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
