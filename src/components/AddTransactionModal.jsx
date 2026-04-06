import { useState } from "react";

function AddTransactionModal({ isOpen, onClose, onAdd }) {
  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      ...form,
      amount: Number(form.amount),
    };

    onAdd(newTransaction);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-800 text-white p-6 rounded-xl w-80">
        <h2 className="text-xl font-bold mb-4">Add Transaction</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="date"
            className="w-full p-2 rounded bg-gray-700"
            onChange={(e) =>
              setForm({ ...form, date: e.target.value })
            }
            required
          />

          <input
            type="number"
            placeholder="Amount"
            className="w-full p-2 rounded bg-gray-700"
            onChange={(e) =>
              setForm({ ...form, amount: e.target.value })
            }
            required
          />

          <input
            type="text"
            placeholder="Category"
            className="w-full p-2 rounded bg-gray-700"
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
            required
          />

          <select
            className="w-full p-2 rounded bg-gray-700"
            onChange={(e) =>
              setForm({ ...form, type: e.target.value })
            }
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <div className="flex justify-between mt-4">
            <button
              type="button"
              className="bg-red-500 px-3 py-1 rounded"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-green-500 px-3 py-1 rounded"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTransactionModal;