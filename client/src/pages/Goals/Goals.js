import React from "react";
import db from "../../data/goalsdb.json";
import Goal from "../../komponent/Goal/Goal";
import Header from "../../komponent/Header/Header";
import "./style.css";

const Goals = () => {
  const goals = db.goals;
  return (
    <div className="goals">
      <Header />
      <div>
        <h1 className="container" id="goalsPageTitle">
          Here's what you're saving for:
        </h1>
        {goals.map((goal) => {
          return (
            <Goal
              id={goal.id}
              title={goal.title}
              amount={goal.amount}
              emoji={goal.emoji}
              saveBy={goal.saveBy}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Goals;
