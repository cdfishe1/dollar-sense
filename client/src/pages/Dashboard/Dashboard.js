import React, { useState } from "react";
import { useAuth } from "../../contexts/Authcontext";
import { Card, Button, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { auth } from "../../Firebase";

const Dashboard = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  console.log(auth.currentUser.uid, auth.currentUser.email);

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
    <div>
      <h1>Here's your data</h1>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
