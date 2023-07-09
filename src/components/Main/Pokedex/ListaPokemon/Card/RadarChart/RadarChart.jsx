import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

import { Radar } from 'react-chartjs-2';

const RadarChart = ({data}) => {
  let obj = {
    labels: ["Health", "Attack", "Defense", "SpA", "SpD", "Speed"],
    datasets: [
      { 
        data: data.map(item => item.stat),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        pointRadius: 10
      }
    ]
  }
  return (<Radar data={obj} options={{
    scales:{
      r:{
        beginAtZero: true,
        max: 255,
        ticks: {
          drawTicks: false,
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }}/>)
};

export default RadarChart;
