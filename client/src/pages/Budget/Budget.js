import React from 'react'
import "./budget.css";
import ScriptTag from 'react-script-tag';



const Budget = () => { 
    

    return (
    
    <div className="wrapper">
    <div className="total">
      <div className="total">Your total is: $<span id="total">0</span></div>
    </div>

    <div className="form">
      <input type="text" id="t-name" placeholder="Name of transaction" />
      <input type="number" min="0" id="t-amount" placeholder="Transaction amount" />
      <button id="add-btn"><i className="fa fa-plus buttons"></i> Add Funds</button>
      <button id="sub-btn"><i className="fa fa-minus"></i> Subtract Funds</button>
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
    <ScriptTag type="text/javascript" src="./scripts/budgetScript.js" />
    <ScriptTag type="text/javascript" src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0" />
  </div>

  
    )
}

export default Budget