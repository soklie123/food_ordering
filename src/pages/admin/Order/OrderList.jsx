import React, { useState } from "react";
import { Eye, CheckCircle } from "lucide-react";

const OrderList = () => {
  // Sample data (replace with API fetch later)
  const [orders, setOrders] = useState([
    {
      id: "ORD001",
      user: "John Doe",
      total: 25.5,
      status: "pending",
      createdAt: "2026-01-19",
    },
    {
      id: "ORD002",
      user: "Jane Smith",
      total: 12.99,
      status: "paid",
      createdAt: "2026-01-18",
    },
  ]);

  // Function to mark order as delivered
  const markDelivered = (orderId) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === orderId ? { ...o, status: "delivered" } : o
      )
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Orders</h1>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Total ($)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Date
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {order.user}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  ${order.total.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : order.status === "paid"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {order.createdAt}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Eye size={18} />
                  </button>
                  {order.status !== "delivered" && (
                    <button
                      onClick={() => markDelivered(order.id)}
                      className="text-green-500 hover:text-green-700"
                    >
                      <CheckCircle size={18} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
