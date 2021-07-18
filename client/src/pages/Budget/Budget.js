import React, { useState, useEffect, useRef } from "react";
import "./budget.css";
import { auth } from "../../Firebase";
import Total from '../../komponent/Total/Total'
import BudgetChart from '../../komponent/Chart/BudgetChart'

const Budget = () => {
  const [tName, setTName] = useState("");
  const [amount, setAmount] = useState(0.0);
  // const [allTransactions, setTransactions] = useState("");
  let transactions = useRef();
  
  useEffect(() => {
    // const abortCont = new AbortController();
    fetch(`/api/transaction/${auth.currentUser.uid}`)
      .then((response) => {
        return response.json();
      })
      .then(

        (data) => {
          // save db data on global variable
          transactions = data;
          // setTransactions(transactions);
          populateTable();
          
        });

  }, []);

 

  //poplulate total in DOM
  // function populateTotal() {
  //   // reduce transaction amounts to a single total value
    
  //   let total = transactions.reduce((total, t) => {
  //     return total + parseInt(t.value);
  //   }, 0);

  //   let totalEl = document.querySelector("#total");


  //   totalEl.textContent = total;


  //   if (totalEl.innerHTML >= 0) {
  //     totalEl.style.color = "#74c69d"
  //   } else {
  //     totalEl.style.color = "crimson"
  //   }
  // }

  //create table of budget data
  function populateTable() {
    let tbody = document.querySelector("#tbody");
    tbody.innerHTML = "";

    transactions.forEach((transaction) => {
      // create and populate a table row
      let tr = document.createElement("tr");
      tr.innerHTML = `
      <td>${transaction.name}</td>
      <td>${transaction.value}</td>
    `;

      tbody.appendChild(tr);
    });
  }


  //function to add or subtract funds
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
      return response.json();
    })
  };

  return (
    <div className="wrapper">
      <div className="total">
        <Total />
      </div>

      <div className="form">
        <input
          type="text"
          id="t-name"
          onChange={(e) => {
            // e.preventDefault();
            setTName(e.target.value);
          }}
          placeholder="Name of transaction"
        />
        <input
          type="number"
          min="0"
          id="t-amount"
          onChange={(e) => {
            // e.preventDefault();
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
      <div>
      <BudgetChart />
      </div>
      
    </div>
  );
};

export default Budget;
