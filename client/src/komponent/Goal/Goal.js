import React from "react";
import { Card, Container } from "react-bootstrap";
import "./style.css";
import { FaTimes } from "react-icons/fa";
import moment from "moment"

const Goals = ({ id, title, emoji, amount, saveBy, onDelete }) => {
  
  //formats the date from greenwich mean time to local time for the user
  const formatDate =  (date) => {
    let convertedDate =  `${new Date(date).getMonth() + 1}/${
      new Date(date).getDate() + 1
    }/${new Date(date).getFullYear()}`;

    return convertedDate;
  };

//calculates the different between the save by date for the goal in the database from the current date
  const daysLeftToSave = () => {
    let x = moment(saveBy)
    let currentDate = moment()
    let daysLeft = (x.diff(currentDate,"days")) + 2
    return daysLeft
  };

  return (
    <div>
      <Container className="d-flex align-items-center justify-content-center goalsPage">
        <Card className="goalsCard" style={{ maxWidth: "540px" }}>
          <Card.Body>
            <div className="row goalBody">
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
                <strong>Days Left to Save: {daysLeftToSave()}</strong>
                {} 
              </p>
            </div>
        
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Goals;
