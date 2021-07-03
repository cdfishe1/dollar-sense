import React, { useRef, useState } from "react";
import { Card, Form, Alert, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/Authcontext";
import { Link } from "react-router-dom";
import "./style.css";
import Header from "../Header/Header";

const ForgotPassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Please check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  }

  return (
    <div>
      <Header />
      <Container
        className="d-flex align-items-center justify-content-center forgotPasswordPage"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body className="forgotPasswordCard">
              <h2 className="text-center mb-4">Reset Password</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}
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

                <button
                  disabled={loading}
                  className="w-100 mt-4 forgotPasswordBtn"
                  type="submit"
                >
                  Reset Password
                </button>
              </Form>
              <div className="w-100 text-center mt-3">
                <Link to="/login">Log In</Link>
              </div>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign Up!</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ForgotPassword;
