import { useState } from "react";

function Transactions({ transactions, onDelete }) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");

  const filteredTransactions = transactions
    .filter((t) =>
      filter === "all" ? true : t.type === filter
    )
    .filter((t) =>
      t.category.toLowerCase().includes(search.toLowerCase()) ||
      t.type.toLowerCase().includes(search.toLowerCase()) ||
      t.date.includes(search)
    )
    .sort((a, b) => {
      if (sortType === "amount-low") return a.amount - b.amount;
      if (sortType === "amount-high") return b.amount - a.amount;
      if (sortType === "date-new") return new Date(b.date) - new Date(a.date);
      if (sortType === "date-old") return new Date(a.date) - new Date(b.date);
      return 0;
    });

  return (
    <div className="bg-gray-800 text-white p-5 rounded-2xl shadow-lg mt-6">
      <h2 className="text-lg font-bold mb-4">Transactions</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="🔍 Search..."
        className="mb-3 p-2 rounded bg-gray-700 text-white w-full"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Sort */}
      <select
        className="mb-3 p-2 rounded bg-gray-700 text-white w-full"
        onChange={(e) => setSortType(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="amount-low">Amount: Low → High</option>
        <option value="amount-high">Amount: High → Low</option>
        <option value="date-new">Date: Newest</option>
        <option value="date-old">Date: Oldest</option>
      </select>

      {/* Filter */}
      <select
        className="mb-4 p-2 rounded bg-gray-700 text-white w-full"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {/* Table with scroll */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-600 text-left min-w-[600px]">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-2">Date</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Category</th>
              <th className="p-2">Type</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((t) => (
                <tr
                  key={t.id}
                  className="border-t border-gray-600 hover:bg-gray-700 transition"
                >
                  <td className="p-2">{t.date}</td>
                  <td className="p-2">₹ {t.amount}</td>
                  <td className="p-2">{t.category}</td>
                  <td className="p-2">{t.type}</td>

                  <td className="p-2">
                    <button
                      onClick={() => onDelete(t.id)}
                      className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-400">
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transactions;