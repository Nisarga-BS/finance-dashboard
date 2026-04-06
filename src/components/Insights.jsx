function Insights({ transactions }) {
  let maxAmount = 0;
  let highestCategory = "";

  const categoryMap = {};

  // 🧠 Calculate highest spending category
  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;

      if (categoryMap[t.category] > maxAmount) {
        maxAmount = categoryMap[t.category];
        highestCategory = t.category;
      }
    }
  });

  return (
    <div className="bg-gray-800 text-white p-5 rounded-2xl shadow-lg mt-6">
      <h2 className="text-lg font-bold mb-4">Insights</h2>

      <p className="mb-2 text-lg">
  🔥 Highest Spending Category:{" "}
  <span className="font-semibold text-yellow-400">
    {highestCategory}
  </span>
</p>

<p className="text-gray-300">
  💡 Tip: Try reducing spending in this category to save more money.
</p>
    </div>
  );
}

export default Insights;