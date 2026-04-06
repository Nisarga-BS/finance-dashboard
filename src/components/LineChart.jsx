import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

function LineChart({ transactions }) {
  // 🧠 Group by date
  const grouped = {};

  transactions.forEach((t) => {
    if (!grouped[t.date]) {
      grouped[t.date] = 0;
    }

    grouped[t.date] += t.type === "income" ? t.amount : -t.amount;
  });

  const labels = Object.keys(grouped);
  const dataValues = Object.values(grouped);

  const data = {
    labels,
    datasets: [
      {
        label: "Balance Trend",
        data: dataValues,
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59,130,246,0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "#E5E7EB",
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#E5E7EB" },
      },
      y: {
        ticks: { color: "#E5E7EB" },
      },
    },
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg mt-6">
      <h2 className="text-xl font-semibold mb-4">
        📈 Balance Trend Over Time
      </h2>

      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;