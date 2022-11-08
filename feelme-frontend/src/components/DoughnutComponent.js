import React, { useEffect } from 'react';
// Chart.js
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutComponent(props) {
  useEffect(()=>{
  },[props.data])
  const data = {
    labels: ['Happy', 'Sad', 'Angry', 'Neutral', 'Disgust', 'Surprise', 'Fear'],
    datasets: [
      {
        label: '# of Votes',
        data: [props.data.happy, props.data.sad, 
          props.data.angry, props.data.neutral, props.data.disgust, props.data.surprise, props.data.fear],
        backgroundColor: [
          '#16c2d5',
          '#89dee2',
          '#10217d',
          '#527c88',
          '#d7baad',
          '#2e4450',
        ],
        borderColor: [
          '#16c2d5',
          '#89dee2',
          '#10217d',
          '#527c88',
          '#d7baad',
          '#2e4450',
        ],
        borderWidth: 1,
      },
    ],
  };
    return <Doughnut data={data} />;
  }

export default DoughnutComponent;
