import React, { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

function VerifiedComponent(props) {
  useEffect(()=>{
  },[props.data])
  const data = {
    labels: ['Similar', 'Different'],
    datasets: [
      {
        label: '# of Votes',
        data: [props.data.similar, props.data.different],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };
    return <Doughnut data={data} />;
  }

export default VerifiedComponent;
