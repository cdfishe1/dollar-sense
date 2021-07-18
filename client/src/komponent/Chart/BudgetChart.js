import React, { useEffect, useRef, useState} from 'react';
import { Line } from 'react-chartjs-2';
import { auth } from "../../Firebase";

const BudgetChart = () => {
  const [chartData, setChartData] = useState({});
  let transactions = useRef();
  // const [allTransactions, setTransactions] = useState("");


  useEffect(() => {
    fetch(`/api/transaction/${auth.currentUser.uid}`)
      .then((response) => {
        return response.json();
      })
      .then(
        (budgetData) => {
          // save db data on global variable
          transactions = budgetData;
          // setTransactions(transactions)
          populateChart();

        });

  }, []);

  const populateChart = () => {
    //  copy array and reverse it
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

    setChartData({
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
    })
  }
    
  return (
    <div>
      <Line data={chartData} />
    </div>
    
  )
}


export default BudgetChart;