import React, { useRef } from "react";
import { Card, Form, Button } from "react-bootstrap";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form>
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
            <Button className="w-100 mt-4" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          Already have an account? Log In
        </div>
      </Card>
    </>
  );
};

export default Signup;
