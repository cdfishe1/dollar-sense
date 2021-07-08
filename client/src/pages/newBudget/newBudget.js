import React, { useState, useEffect } from "react";
import "./budget.css";
import ScriptTag from 'react-script-tag';

function NewBudget () { 
  const [budget, setBudget] = useState([]);

  
  // let myChart;
  let transactions = [];
    useEffect(() => {
      
      fetch("/api/transaction")
      .then(function (response) {
      return response.json();
      })
      .then(function (data) {
      console.log(data);
      transactions = data;
      setBudget(transactions);
      populateTotal();
      populateTable();
      });

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

  function sendTransaction(isAdding) {
    let nameEl = document.querySelector("#t-name");
    let amountEl = document.querySelector("#t-amount");
    let errorEl = document.querySelector(".form .error");
  
    // validate form
    if (nameEl.value === "" || amountEl.value === "") {
      errorEl.textContent = "Missing Information";
      return;
    }
    else {
      errorEl.textContent = "";
    }
  
    // create record
    let transaction = {
      name: nameEl.value,
      value: amountEl.value,
      date: new Date().toISOString()
    };
  
    // if subtracting funds, convert amount to negative number
    if (!isAdding) {
      transaction.value *= -1;
    }
  
    // add to beginning of current array of data
    transactions.unshift(transaction);
  
    // re-run logic to populate ui with new record
    // populateChart();
    populateTable();
    populateTotal();
    
    // also send to server
    fetch("/api/transaction", {
      method: "POST",
      body: JSON.stringify(transaction),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
    .then(response => {    
      return response.json();
    })
    .then(data => {
      if (data.errors) {
        errorEl.textContent = "Missing Information";
      }
      else {
        // clear form
        nameEl.value = "";
        amountEl.value = "";
      }
    })
    .catch(err => {
      // fetch failed, so save in indexed db
      // saveRecord(transaction);
  
      // clear form
      nameEl.value = "";
      amountEl.value = "";
    });
  }
  
  // document.querySelector("#add-btn").onclick = function() {
  //   sendTransaction(true);
  // };
  
  // document.querySelector("#sub-btn").onclick = function() {
  //   sendTransaction(false);
  // };

  
  return (
    
    <div className="wrapper">
    <div className="total">
      <div className="total">Your total is: $<span id="total">0</span></div>
    </div>

    <div className="form">
      <input type="text" id="t-name" placeholder="Name of transaction" />
      <input type="number" min="0" id="t-amount" placeholder="Transaction amount" />
      <button id="add-btn" onClick = {sendTransaction(true)}><i className="fa fa-plus buttons"></i> Add Funds</button>
      <button id="sub-btn" onClick = {sendTransaction(false)}><i className="fa fa-minus"></i> Subtract Funds</button>
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
        <tbody id="tbody">
          
        </tbody>
      </table>
    </div>
    
    <canvas id="myChart"></canvas>
    

      
    <ScriptTag type="text/javascript" src="./scripts/newBudgetScript.js" />
    <ScriptTag type="text/javascript" src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0" />
  </div>

  
  )
}

export default NewBudget;