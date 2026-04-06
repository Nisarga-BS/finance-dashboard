import { FaHome, FaChartPie, FaList, FaLightbulb } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-5 fixed">
      <h2 className="text-2xl font-bold mb-8">💰 Finance Dashboard</h2>

      <ul className="space-y-6">
        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <FaHome /> Dashboard
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <FaChartPie /> Analytics
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <FaList /> Transactions
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <FaLightbulb /> Insights
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;