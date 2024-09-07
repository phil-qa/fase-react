import { React, useContext } from "react";
import { CartContext } from "../context/cart-context";

const ItemCard = ({ id, symbol, name, price }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(id);
  };

  return (
    <div className="item-card">
      <div className="symbol">{symbol}</div>
      <h3>{name}</h3>
      <p>£{price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
};

export default ItemCard;
