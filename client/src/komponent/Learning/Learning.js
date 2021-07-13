import React from "react";
import { Card, Container } from "react-bootstrap";
import "./style.css";
import { FaTimes } from "react-icons/fa";

const Learning = ({ id, title, news, source, date }) => {
  return (
    <div>
      <Container className="d-flex align-items-center justify-content-center goalsPage">
        <Card className="learningCard" style={{ maxWidth: "540px" }}>
          <Card.Body key={id}>
            <div className="row">
              <h3 className="card-title text-center learningTitle">
                {" "}
               {title}{" "}
                <FaTimes
                  className="deleteIcon"
                  style={{ color: "red", cursor: "pointer" }}
                />
              </h3>
              <p className="card-text">
                <strong>News:</strong> ${news}
              </p>
              <p className="card-text">
                <strong>Source:</strong> {source}
              </p>
              <p className="card-text">
                <strong>Date:</strong>{" "} {date}
              </p>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Learning;