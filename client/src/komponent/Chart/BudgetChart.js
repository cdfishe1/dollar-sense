import React, { useEffect, useRef } from 'react';
// import { Line } from 'react-chartjs-2';
import { auth } from "../../Firebase";
import Chart from 'chart.js/auto';

const BudgetChart = () => {
  let transactions = useRef();
  let myChart = useRef();

  useEffect(() => {
    fetch(`/api/transaction/${auth.currentUser.uid}`)
      .then((response) => {
        return response.json();
      })
      .then(

        (data) => {
          // save db data on global variable
          transactions = data;
          // setTransactions(transactions);
          populateChart();
        },
        []
      );

  });

  function populateChart() {
    // copy array and reverse it
    let reversed = transactions.slice().reverse();
    let sum = 0;
  
    // create date labels for chart
    let labels = reversed.map(t => {
      let date = new Date(t.date);
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    });
  
    // create incremental values for chart
    let data = reversed.map(t => {
      sum += parseInt(t.value);
      return sum;
    });
  
    //remove old chart if it exists
    console.log('line 98', myChart)
    if (myChart) {
      myChart.destroy();
    } 
    
    let ctx = document.getElementById("myChart").getContext("2d");
  
    myChart = new Chart(ctx, {
      type: 'line',
        data: {
          labels,
          datasets: [{
              label: "Total Over Time",
              fill: true,
              backgroundColor: "#6666ff",
              data
          }]
      }
    });
    // setChart(chart);
  }

  return (
    <canvas id="myChart"></canvas>
  )
}


export default BudgetChart;