//The dollarSense team is grateful for the help of Radomir Fugiel for his coding input and guidance in getting our budget page working!

import React, { useState, useEffect } from "react";
import "./budget.css";
import { auth } from "../../Firebase";
import BudgetChart from '../../komponent/Chart/BudgetChart'
import BudgetButtons from "../../komponent/BudgetButtons/BudgetButtons";


const Budget = () => {
  
  const [transactions, setTransactions] = useState([]);
  
  useEffect(() => {

    fetchAndUpdateTransactions();

  }, []);


  const fetchAndUpdateTransactions = () => {
    fetch(`/api/transaction/${auth.currentUser.uid}`)
      .then((response) => {
        return response.json();
      })
      .then(
      (data) => {
      setTransactions(data);
      });
}



const onBtnClick = () => {

  fetchAndUpdateTransactions();
}

const calculateTotal = (x) => {
  return x.reduce((total, t) => {
    return total + parseInt(t.value);
}, 0);
}

  return (
    <div className="wrapper">
      <div className="total">
        <h1>
          Your total is: $<span id="total">{calculateTotal(transactions)}</span>
          </h1>
        </div>
        <BudgetButtons onBtnClick={onBtnClick}/>

        <div className="transactions">
          <table>
            <thead>
              <tr>
                <th>Transaction</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody id="tbody">

            {transactions.map( (item,i) => {
              return(
              <tr key={i}>
              <td>{item.name}</td>
              <td>${item.value}</td>
              </tr>
            )})}
            </tbody>
          </table>
        </div>
      <div>
      <BudgetChart transactions={transactions}/>
      </div>
      
    </div>
  );
};

export default Budget;
