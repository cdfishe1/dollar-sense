import React from "react";
import { Card, Container } from "react-bootstrap";
import "./style.css";
import { FaTimes } from "react-icons/fa";

const Goals = ({ id, title, emoji, amount, saveBy }) => {
  return (
    <div>
      <Container className="d-flex align-items-center justify-content-center goalsPage">
        <Card className="goalsCard" style={{ maxWidth: "540px" }}>
          <Card.Body key={id}>
            <div className="row">
              <h3 className="card-title text-center goalTitle">
                {" "}
                {emoji} {title}{" "}
                <FaTimes
                  className="deleteIcon"
                  style={{ color: "red", cursor: "pointer" }}
                />
              </h3>
              <p className="card-text">
                <strong>Total to Save:</strong> ${amount}
              </p>
              <p className="card-text">
                <strong>Save this amount by:</strong> {saveBy}
              </p>
              <p className="card-text">
                <strong>Days Left to Save:</strong>{" "}
              </p>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Goals;


