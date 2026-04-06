function SummaryCard({ title, value }) {
  return (
    <div className="bg-gray-800 text-white p-5 rounded-2xl shadow-lg hover:scale-105 transition">
      <h2 className="text-gray-400">{title}</h2>
      <p className="text-3xl font-bold mt-2">₹ {value}</p>
    </div>
  );
}

export default SummaryCard;