import { createContext, useState } from "react";
import itemsData from "../itemsData.json";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState([]);

  const addToCart = (itemId) => {
    const item = itemsData.find((item) => item.id === itemId);
    setItemsInCart((prev) => [...prev, item]);
  };

  const contextValue = {
    itemsInCart,
    addToCart,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
