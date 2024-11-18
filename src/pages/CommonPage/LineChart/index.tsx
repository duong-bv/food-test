import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Define the types for props if needed
interface MultiLineChartProps {
  maintainAspectRatio?: boolean;
  data1: number[];
  data2: number[];
}

const MultiLineChart: React.FC<MultiLineChartProps> = (props) => {
  const {maintainAspectRatio = true, data1, data2} = props;
  const data = {
    labels: ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'],
    datasets: [
      {
        label: 'Data A',
        data: data1,
        borderColor: '#8FE9D0',
        backgroundColor: '#8FE9D0',
        fill: true,
      },
      {
        label: 'Data B',
        data: data2 ,
        borderColor: '#FFCC21',
        backgroundColor: '#FFCC21',
        fill: true,
      },
    ],
  };

  const options: any = {
    interaction: {
      intersect: false,
      mode: "index",
    },
    responsive: true,
    maintainAspectRatio: maintainAspectRatio,
    plugins: {
      legend: {
        display: false, // Hides the legend
      },  
    },
    scales: {
      y: {
        beginAtZero: true,
        display: false,
        grid: {
          display: false, // Remove Y-axis grid
        },
      },
      x: {
        ticks: {
          color: "#FFFFFF", // Color for X-axis labels
        },
        grid: {
          color: "#777777", // Grid line color
        },
      }
    },
  };

  return (
      <Line data={data} options={options} className='w-full'/>
  );
};

export default MultiLineChart;
