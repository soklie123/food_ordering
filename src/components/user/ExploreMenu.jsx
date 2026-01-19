import React from "react";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5 my-8 px-4 md:px-8" id="explore-menu">
      {/* Title */}
      <h1 className="text-2xl font-medium text-gray-800">Explore our menu</h1>
      <p className="text-gray-500 max-w-3xl text-sm md:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, omnis?
      </p>

      {/* Menu List */}
      <div className="flex gap-6 overflow-x-auto py-4 scrollbar-hide">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name))
            }
            className="flex flex-col items-center text-center cursor-pointer min-w-[80px] md:min-w-[100px]"
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={`w-[7.5vw] min-w-[80px] h-[7.5vw] md:w-20 md:h-20 rounded-full object-cover transition-all ${
                category === item.menu_name ? "border-4 border-red-500 p-0.5" : ""
              }`}
            />
            <p className="mt-2 text-gray-600 text-sm md:text-base">{item.menu_name}</p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="h-0.5 bg-gray-200 border-none my-2" />

      {/* Tailwind helper to hide scrollbar */}
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>
    </div>
  );
};

export default ExploreMenu;
