import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/Authcontext";
import { useHistory } from "react-router-dom";
import { auth } from "../../Firebase";
import "./style.css";
import LearningBlogs from "../../komponent/LearningBlogs/LearningBlogs";

const Learning = () => {
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
     
      <h1 className="dashTitle text-center mb-4">
        Welcome, {currentUser.email} !
      </h1>
      
      <hr></hr>
      <div>
        <h3 id="blogTitle" className="mb-4">Learn About Finance
        </h3>
      
        <div>
          
          <LearningBlogs />
        </div>
      </div>
      <div className="w-100 text-center mt-2">
        
      </div>
    </div>
  );
};

export default Learning;
