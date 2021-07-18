import React, { useState, useEffect, useRef } from "react";
import "./budget.css";
import { auth } from "../../Firebase";
// import Chart from 'chart.js/auto';
import Total from '../../komponent/Total/Total'

const Budget = () => {
  const [tName, setTName] = useState("");
  const [amount, setAmount] = useState(0.0);
  const [allTransactions, setTransactions] = useState("");
  let transactions = useRef();
  // let myChart = useRef();
  
  
  useEffect(() => {
    fetch(`/api/transaction/${auth.currentUser.uid}`)
      .then((response) => {
        return response.json();
      })
      .then(

        (data) => {
          // save db data on global variable
          transactions = data;
          setTransactions(transactions);
          populateTotal();
          populateTable();
          // populateChart();
        },
        [allTransactions]
      );

  });

 

  //poplulate total in DOM
  function populateTotal() {
    // reduce transaction amounts to a single total value
    
    let total = transactions.reduce((total, t) => {
      return total + parseInt(t.value);
    }, 0);

    let totalEl = document.querySelector("#total");


    totalEl.textContent = total;


    if (totalEl.innerHTML >= 0) {
      totalEl.style.color = "#74c69d"
    } else {
      totalEl.style.color = "crimson"
    }
  }

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

  
  //create chart based off of budget data
  // function populateChart() {
  //   // copy array and reverse it
  //   let reversed = transactions.slice().reverse();
  //   let sum = 0;
  
  //   // create date labels for chart
  //   let labels = reversed.map(t => {
  //     let date = new Date(t.date);
  //     return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  //   });
  
  //   // create incremental values for chart
  //   let data = reversed.map(t => {
  //     sum += parseInt(t.value);
  //     return sum;
  //   });
  
  //   //remove old chart if it exists
  //   console.log('line 98', myChart)
  //   // if (myChart) {
  //   //   myChart.destroy();
  //   // } 
    
  //   let ctx = document.getElementById("myChart").getContext("2d");
  
  //   myChart = new Chart(ctx, {
  //     type: 'line',
  //       data: {
  //         labels,
  //         datasets: [{
  //             label: "Total Over Time",
  //             fill: true,
  //             backgroundColor: "#6666ff",
  //             data
  //         }]
  //     }
  //   });
  //   // setChart(chart);
  // }

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
        {/* <div className="total">
          Your total is: $<span id="total">0</span>
        </div> */}
        <Total />
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

      {/* <canvas id="myChart"></canvas> */}
      {/* <BudgetChart /> */}
      

    </div>
  );
};

export default Budget;
