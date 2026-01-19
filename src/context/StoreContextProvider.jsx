import { useState } from "react";
import { StoreContext } from "./StoreContext";
import { food_list } from "../assets/assets";

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const copy = { ...prev };
      if (!copy[id]) return copy;
      copy[id]--;
      if (copy[id] === 0) delete copy[id];
      return copy;
    });
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (const itemId in cartItems) {
      const itemInfo = food_list.find(
        (item) => item._id === itemId
      );
      if (itemInfo) {
        total += itemInfo.price * cartItems[itemId];
      }
    }
    return total;
  };

  return (
    <StoreContext.Provider
      value={{
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount, 
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
