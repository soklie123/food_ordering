import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-t-xl"
        />

        {/* Add to cart / counter */}
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            alt="add"
            onClick={() => addToCart(id)}
            className="w-9 h-9 absolute bottom-4 right-4 cursor-pointer rounded-full"
          />
        ) : (
          <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white rounded-full p-1">
            <img
              src={assets.remove_icon_red}
              alt="remove"
              onClick={() => removeFromCart(id)}
              className="w-7 h-7 cursor-pointer"
            />
            <p className="font-medium">{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              alt="add"
              onClick={() => addToCart(id)}
              className="w-7 h-7 cursor-pointer"
            />
          </div>
        )}
      </div>

      {/* Food info */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <p className="font-medium text-lg">{name}</p>
          <img src={assets.rating_starts} alt="rating" className="w-16" />
        </div>
        <p className="text-gray-500 text-sm mb-2">{description}</p>
        <p className="text-red-500 font-semibold text-lg">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
