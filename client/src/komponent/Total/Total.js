//The dollarSense team is grateful for the help of Radomir Fugiel for his coding input and guidance in getting our budget page working!
import React, { useEffect, useState } from 'react';
import { auth } from "../../Firebase";

const Total = () => {
    
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
    
         
    let total = transactions.reduce((total, t) => {
        return total + parseInt(t.value);
    }, 0);

        
    return (
        <div className="total">
          Your total is: $<span id="total">{total}</span>
        </div>
    )
}

export default Total;