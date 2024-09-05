import React from "react";

const Product = ({ name, price, imageUrl }) => {
  return (
    <div className="product">
      <h4>{name}</h4>
      <p>£ {price}</p>
      <img src={imageUrl} alt="A planty thing" />
    </div>
  );
};

export default Product;
