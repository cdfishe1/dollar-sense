import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/Authcontext";
import { Card, Button, Alert, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { auth } from "../../Firebase";
import "./style.css";

const Dashboard = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    getAllGoals();
  }, [goals]);

  const getAllGoals = () => {
    fetch(`/api/all-goals/${auth.currentUser.uid}`)
      .then((response) => response.json())
      .then((data) => {
        setGoals(data);
      })
      .catch((err) => console.log(err));
  };

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out!");
    }
  }

  return (
    <div className="dashboard">
      {/* <h1>Here's your data</h1>
      <Card>
        <Card.Body> */}
      <h1 className="dashTitle text-center mb-4">
        Welcome, {currentUser.email} !
      </h1>
      <hr></hr>
      {error && <Alert variant="danger">{error}</Alert>}
      <div>
        <h3 id="savingTitle" className="mb-4">
          Current Goals:
        </h3>
      </div>
      <div className="text-center">
        {goals.map((goal) => {
          return (
            <div className="dashGoals" key={goal._id}>
              <Card className="goalsCard" >
                <Card.Body id="cardBody">
                  <h3 className="card-title goalTitle"><a className="goalLinks"href="/goals">
                    {" "}
                    {goal.emoji} {goal.title}{" "}</a>
                  </h3>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
      <div>
        <h3 id="budgetTitle" className="mb-4">Current Budget Status: $300</h3>
      </div>
      <div>
        <h3 id="blogTitle" className="mb-4">Not Sure Where to Start? Check These Out:</h3>
      </div>
      <div className="container carouselCont" style={{width: 800}}>
  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/assets/micheile-henderson-SoT4-mZhyhE-unsplash.jpg" className="img-fluid d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/assets/micheile-henderson-SoT4-mZhyhE-unsplash.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/assets/micheile-henderson-SoT4-mZhyhE-unsplash.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>
      <div className="w-100 text-center mt-2">
        <Button variant="link" id="logOutBtn" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
