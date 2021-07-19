import React, { useEffect, useRef, useState } from 'react';
import { auth } from "../../Firebase";

const Total = () => {
    const [totalBudget, setTotalBudget] = useState("");
    let transactions = useRef();

    useEffect(() => {
        fetch(`/api/transaction/${auth.currentUser.uid}`)
            .then((response) => {
            return response.json();
            })
            .then(
            (data) => {
            // save db data on global variable
            transactions = data;
            setTotalBudget(transactions)
            populateTotal();
            },[totalBudget]);
    });

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
    
    return (
        <div className="total">
          Your total is: $<span id="total">0</span>
        </div>
    )
}

export default Total;