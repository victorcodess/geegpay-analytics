import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  scales: {
    y: {
      display: true,
      suggestedMax: 50.0,
      color: "#fff",
      // ticks: {
      //   // Include a dollar sign in the ticks
      //   callback: function(value, index, ticks) {
      //       return  value + ".000";
      //   }
      // }
    },
    x: {
      display: true,
      grid: {
        display: false,
        drawBorder: false, //<- set this
      },
    },
  },
  responsive: true,
  barThickness: 30,
  borderRadius: 20,

  plugins: {
    tooltip: {
      enabled: true,
      backgroundColor: "#090C2C",
      titleFont: {
        family: '"Inter", sans-serif',
        size: 12,
      },
      bodyFont: {
        family: '"Inter", sans-serif',
        size: 12,
      },
      padding: 20,
      caretSize: 10,
      displayColors: false,
    },
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  labels,
  datasets: [
    {
      label: "Sales Trend",
      data: [8.0, 19.0, 3.0, 28.0, 9.0, 42.0, 9.0, 20.0, 32.0, 5.0, 30.0, 28.0],
      backgroundColor: "rgba(52, 202, 165, 0.10)",
      // stepped: true,
      radius: 3,
      hoverRadius: 10,
      hitRadius: 100,
      pointStyle: "circle",
      color: "#fff",
      fill: true,
      tension: 0.35,
    },
  ],
};

export default function BarChart() {
  return <Bar options={options} data={data} />;
}
