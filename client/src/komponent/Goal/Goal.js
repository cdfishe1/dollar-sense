import React from "react";
import { Card, Button, Container } from "react-bootstrap";
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

{
  /* <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div> */
}
