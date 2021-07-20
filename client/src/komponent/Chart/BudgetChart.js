//The dollarSense team is grateful for the help of Radomir Fugiel for his coding input and guidance in getting our budget page working!

import React from 'react';
import { Line } from 'react-chartjs-2';


const BudgetChart = ({transactions}) => {
  

  let reversed = transactions.slice().reverse();
  let sum = 0;

  // create date labels for chart
  let budgetLabels = reversed.map(t => {
    let date = new Date(t.date);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  });

  // create incremental values for chart
  let budgetData = reversed.map(t => {
    sum += parseInt(t.value);
    return sum;
  });

  let chartData = {
    labels: [...budgetLabels],
    datasets: [
      {
        label: 'Budget',
        data: [...budgetData],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  }
    
  return (
    <div>
      <Line data={chartData} />
    </div>
    
  )
}

export default BudgetChart;