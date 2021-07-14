import React, { useState, useEffect } from "react";
//import db from "../../data/goalsdb.json";
import Goal from "../../komponent/Goal/Goal";
import Header from "../../komponent/Header/Header";
import "./style.css";
import Picker from "emoji-picker-react";
import { auth } from "../../Firebase";

const Goals = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [goalName, setGoalName] = useState("");
  const [goalAmount, setGoalAmount] = useState(0.0);
  const [saveByDate, setSaveByDate] = useState("");
  const [goalEmoji, setGoalEmoji] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [goals, setGoals] = useState([]);
  

  useEffect(() => {
    getAllGoals();
  }, [goals]);

  const newGoalBtn = () => {
    console.log("checkingBtn");
    setGoalName("");
    setGoalAmount(0.0);
    setSaveByDate("");
    setChosenEmoji(null);
  };

  const onEmojiClick = (e, emojiObject) => {
    setChosenEmoji(emojiObject);
    const { emoji } = emojiObject;
    setGoalEmoji(emoji);
  };

  const saveGoalBtn = () => {
    let newGoal = {
      title: goalName,
      amount: goalAmount,
      userID: auth.currentUser.uid,
      saveBy: saveByDate,
      emoji: goalEmoji,
    };
    setLoading(true);

    fetch("/api/new-goal", {
      method: "POST",
      body: JSON.stringify(newGoal),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setLoading(false);
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  const getAllGoals = () => {
    fetch(`/api/all-goals/${auth.currentUser.uid}`)
      .then((response) => response.json())
      .then((data) => {
        setGoals(data);
      })
      .catch((err) => console.log(err));
  };

  const deleteGoal = (id) => {
    console.log("delete", id);
    fetch("api/delete-goal/" + id, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json)
      .then(() => console.log(id, "deleted"));
  };

  return (
    <div className="goals">
      
      <div>
        {goals && (
          <h1 className="container" id="goalsPageTitle">
            Goals Detailed Overview:
          </h1>
        )}
        {goals === [] && (
          <h1 className="container" id="goalsPageTitle">
            No Goals Yet, Let's Get Started!{" "}
          </h1>
        )}
        {goals.map((goal) => {
          return (
            <div key={goal._id}>
              <Goal
                key={goal._id}
                title={goal.title}
                amount={goal.amount}
                emoji={goal.emoji}
                saveBy={goal.saveBy}
                onDelete={() => deleteGoal(goal._id)}
              />
            </div>
          );
        })}
      </div>
      <div>
        <div className="container text-center">
          <button
            type="button"
            onClick={() => {
              newGoalBtn();
            }}
            className="addGoalBtn"
            data-toggle="modal"
            data-target="#addGoalModal"
          >
            Add Goal
          </button>
        </div>

        <div
          className="modal fade"
          id="addGoalModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  What do you want to save for?
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <label className="inputTitles">Goal Name: </label>
                  <input
                    type="text"
                    required
                    onChange={(e) => {
                      setGoalName(e.target.value);
                    }}
                    className="goalInput"
                    placeholder="What are you saving for?"
                  />
                  <label id="amountTitle" className="inputTitles">
                    Amount:{" "}
                  </label>
                  <input
                    type="text"
                    required
                    onChange={(e) => {
                      setGoalAmount(parseInt(e.target.value));
                    }}
                    className="goalInput"
                    placeholder="How much do you want to save?"
                  />
                  <label id="dateTitle" className="inputTitles">
                    When do you want to save this by?{" "}
                  </label>
                  <input
                    type="date"
                    onChange={(e) => {
                      setSaveByDate(e.target.value);
                    }}
                    required
                    className="goalInput"
                  />
                  <label id="dateTitle" className="inputTitles">
                    Which emoji describes the goal?:{" "}
                  </label>
                  <div>
                    {chosenEmoji ? (
                      <span>You chose: {chosenEmoji.emoji}</span>
                    ) : (
                      <span>No emoji Chosen</span>
                    )}
                    <Picker
                      onChange={(e) => {
                        setChosenEmoji(e.target.value);
                      }}
                      onEmojiClick={onEmojiClick}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="closeModalBtn"
                  data-dismiss="modal"
                >
                  Close
                </button>

                {!isLoading && (
                  <button
                    type="button"
                    onClick={() => {
                      saveGoalBtn();
                    }}
                    className="saveGoalBtn"
                    data-dismiss="modal"
                  >
                    Save Goal
                  </button>
                )}
                {isLoading && (
                  <button type="button" disabled className="saveGoalBtn">
                    Saving Goal...
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
