import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function ChartSection({ transactions }) {
  const categoryData = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryData[t.category] =
        (categoryData[t.category] || 0) + t.amount;
    }
  });

  const data = {
    labels: Object.keys(categoryData),
    datasets: [
      {
        data: Object.values(categoryData),
        backgroundColor: [
          "#4F46E5", // Indigo
          "#22C55E", // Green
          "#F59E0B", // Yellow
          "#EF4444", // Red
          "#06B6D4", // Cyan
        ],
        borderWidth: 2,
        borderColor: "#1F2937",
      },
    ],
    datasets: [
  {
    data: Object.values(categoryData),
    backgroundColor: [
      "#4F46E5",
      "#22C55E",
      "#F59E0B",
      "#EF4444",
      "#06B6D4",
    ],
    borderWidth: 2,
    borderColor: "#1F2937",
    hoverOffset: 12,   
  },
],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "#E5E7EB", 
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg mt-6">
      <h2 className="text-xl font-semibold mb-4">
        📊 Spending Breakdown
      </h2>

      <div className="max-w-md mx-auto">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default ChartSection;