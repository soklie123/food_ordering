import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../user/FoodItems";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // Filter foods by category
  const filteredFoods =
    category === "All"
      ? food_list
      : food_list.filter((item) => item.category === category);

  return (
    <div className="mt-8 px-4 md:px-8" id="food-display">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Top dishes near you
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredFoods.map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
