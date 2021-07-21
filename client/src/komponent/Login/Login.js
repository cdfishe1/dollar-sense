import React, { useRef, useState } from "react";
import { Card, Form, Alert, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/Authcontext";
import { Link, useHistory } from "react-router-dom";
import "./style.css";
import { auth } from "../../Firebase";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  //const [currentUser, setCurrentUser] = useState();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      const token = auth.uid;
      history.push("/dashboard");
    } catch {
      setError("Failed to sign in!");
    }
    setLoading(false);
  }

  return (
    <div>
      <Container
        className="d-flex align-items-center justify-content-center loginPage"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body className="loginCard">
              <h2 className="text-center mb-4">Log In to your Account</h2>
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

                <button
                  disabled={loading}
                  className="w-100 mt-4 loginBtn"
                  type="submit"
                >
                  Log In
                </button>
              </Form>
              <div className="w-100 text-center mt-3">
                <Link to="/forgot-password">Forgot Password?</Link>
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

export default Login;
