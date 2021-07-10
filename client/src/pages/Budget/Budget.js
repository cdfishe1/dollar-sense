import React, { useState, useEffect, useRef } from "react";
import "./budget.css";
// import ScriptTag from "react-script-tag";
import { auth } from "../../Firebase";



const Budget = () => {
  const [tName, setTName] = useState("");
  const [amount, setAmount] = useState(0.0);
  // let transactions = useRef(null);
  let transactions = useRef();
  

  useEffect(() => {
    
    fetch("/api/transaction")
    .then(response => {
      return response.json();
    })
    .then(data => {
      // save db data on global variable
      transactions = data;

      populateTotal();
      populateTable();
      // populateChart();

      
}, []);

  function populateTotal() {
    // reduce transaction amounts to a single total value
    let total = transactions.reduce((total, t) => {
      return total + parseInt(t.value);
    }, 0);

    let totalEl = document.querySelector("#total");
    totalEl.textContent = total;
  }

  function populateTable() {
    let tbody = document.querySelector("#tbody");
    tbody.innerHTML = "";

    transactions.forEach(transaction => {
      // create and populate a table row
      let tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${transaction.name}</td>
        <td>${transaction.value}</td>
      `;

      tbody.appendChild(tr);
    });
  }

  function populateTable() {
    let tbody = document.querySelector("#tbody");
    tbody.innerHTML = "";

    transactions.forEach(transaction => {
      // create and populate a table row
      let tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${transaction.name}</td>
        <td>${transaction.value}</td>
      `;

      tbody.appendChild(tr);
    });
  }
  });
  

  const addBtn = () => {
    let transaction = {
      name: tName,
      value: amount,
      userID: auth.currentUser.uid,
      date: new Date().toISOString(),
    };

    console.log(transaction);

    fetch("/api/transaction", {
      method: "POST",
      body: JSON.stringify(transaction),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(response);
      return response.json();
    });
  };

  return (
    <div className="wrapper">
      <div className="total">
        <div className="total">
          Your total is: $<span id="total">0</span>
        </div>
      </div>

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
        <button
          id="add-btn"
          onClick={() => {
            addBtn();
          }}
        >
          <i className="fa fa-plus buttons"></i> Add Funds
        </button>
        <button id="sub-btn">
          <i className="fa fa-minus"></i> Subtract Funds
        </button>
        <p className="error"></p>
      </div>

      <div className="transactions">
        <table>
          <thead>
            <tr>
              <th>Transaction</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody id="tbody"></tbody>
        </table>
      </div>

      <canvas id="myChart"></canvas>
      
      
      {/* <ScriptTag type="text/javascript" src="./scripts/budgetScript.js" /> */}
      {/* <ScriptTag
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"
      /> */}
    </div>
  );
};

export default Budget;
