import React from "react";
import { Card, Container } from "react-bootstrap";
import "./style.css";
import { FaTimes } from "react-icons/fa";

const Goals = ({ id, title, emoji, amount, saveBy, onDelete }) => {
  const formatDate = (date) => {
    let convertedDate = `${new Date(date).getMonth() + 1}/${
      new Date(date).getDate() + 1
    }/${new Date(date).getFullYear()}`;

    return convertedDate;
  };

  // const daysLeftToSave = (formatDate, date) => {
  //   let currentDate = new Date().toLocaleDateString();
  //   let daysLeft = date - currentDate;
  //   console.log(daysLeft);
  // };

  // const deleteGoal = (id) => {
  //   console.log("delete", id);
  // };

  let currentDate = new Date().toLocaleDateString();

  return (
    <div>
      <Container className="d-flex align-items-center justify-content-center goalsPage">
        <Card className="goalsCard" style={{ maxWidth: "540px" }}>
          <Card.Body>
            <div className="row">
              <h3 className="card-title text-center goalTitle">
                {" "}
                {emoji} {title}{" "}
                <FaTimes
                  className="deleteIcon"
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => onDelete(id)}
                />
              </h3>
              <p className="card-text">
                <strong>Total to Save:</strong> ${amount}
              </p>
              <p className="card-text">
                <strong>Save this amount by:</strong> {formatDate(saveBy)}
              </p>
              <p className="card-text">
                <strong>Days Left to Save:</strong>
                {formatDate(saveBy) - currentDate}
              </p>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Goals;
