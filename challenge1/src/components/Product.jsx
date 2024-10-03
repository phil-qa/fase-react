import React, { useState } from "react";

const Product = ({ name, price, imageUrl }) =>
{
  const [addToCart, setAddToCart] = useState(false);

  const handleAddClick = () =>
  {
    setAddToCart((prevState) => !prevState);
  };

  return (
    <div className="card h-100">
      <img src={imageUrl} alt={name} className="card-img-top" />
      <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">£ {price}</p>
        <button
          className={`btn mt-auto ${addToCart ? "btn-success" : "btn-light"}`}
          onClick={handleAddClick}
        >
          {addToCart ? "Added to cart" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};

export default Product;
