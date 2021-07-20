//The dollarSense team is grateful for the help of Radomir Fugiel for his coding input and guidance in getting our budget page working!

import React, { useState } from "react";
import { auth } from "../../Firebase";

const BudgetButtons = ({onBtnClick}) => {

  const [tName, setTName] = useState("");
  const [amount, setAmount] = useState(0.0);

  const addBtn = (isAdding) => {
    let transaction = {
      name: tName,
      value: amount,
      userID: auth.currentUser.uid,
      date: new Date().toISOString(),
    };

    if (!isAdding) {
      transaction.value *= -1;
    }

    fetch("/api/transaction", {
      method: "POST",
      body: JSON.stringify(transaction),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    }).then((response) => {
        onBtnClick();
      return response.json();
    })
  };

  return (
    <div className="form">
    <input
      type="text"
      id="t-name"
      onChange={(e) => {
        
        setTName(e.target.value);
      }}
      placeholder="Name of transaction"
    />
    <input
      type="number"
      min="0"
      id="t-amount"
      onChange={(e) => {
        
        setAmount(e.target.value);
      }}
      placeholder="Transaction amount"
    />
    <br></br>
    <button
      id="add-btn"
      onClick={() => {
        addBtn(true);
      }}
    >
      <i className="fa fa-plus buttons"></i> Add Funds
    </button>
    <button id="sub-btn"
    onClick={() => {
      addBtn(false);
    }}
    >
      <i className="fa fa-minus"></i> Subtract Funds
    </button>
    <p className="error"></p>
  </div>

 );
};

export default BudgetButtons;
