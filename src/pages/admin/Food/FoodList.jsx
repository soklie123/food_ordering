import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const FoodList = () => {
  const url = "http://localhost:4000";
  const [list, setList] = useState([]);

  // Fetch food list
  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Failed to fetch list");
      }
    } catch (error) {
      toast.error("Server error");
      console.error(error);
    }
  };

  // Delete food
  const removeFood = async (id) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id });
      if (response.data.success) {
        toast.success("Item removed!");
        setList((prev) => prev.filter((item) => item._id !== id));
      } else {
        toast.error("Failed to delete");
      }
    } catch (error) {
      toast.error("Server error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="w-full p-8">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-6">Food List</h2>

      {/* Table container */}
      <div className="w-full bg-white p-6 rounded-xl shadow-md">
        
        {/* Header */}
        <div className="grid grid-cols-[100px_1fr_150px_120px_120px] items-center py-3 border-b font-semibold text-gray-700">
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p>Action</p>
        </div>

        {/* Rows */}
        {list.map((item) => (
          <div
            key={item._id}
            className="grid grid-cols-[100px_1fr_150px_120px_120px] items-center py-4 border-b last:border-none"
          >
            {/* Image */}
            <img
              src={`${url}/images/${item.image}`}
              alt={item.name}
              className="w-16 h-16 rounded-xl object-cover"
            />

            {/* Data */}
            <p className="text-gray-800">{item.name}</p>
            <p className="text-gray-600">{item.category}</p>
            <p className="font-medium">${item.price}</p>

            {/* Action */}
            <button
              onClick={() => removeFood(item._id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
