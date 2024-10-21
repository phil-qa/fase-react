import React, { useState } from "react";

interface ProductProps {
  name: string;
  price: number;
  imageUrl: string;
}

const Product: React.FC<ProductProps> = (ProductProps) => {
  const [addToCart, setAddToCart] = useState(false);

  const handleAddClick = () => {
    setAddToCart((prevState) => !prevState);
  };

  return (
    <div className="card h-100">
      <img src={ProductProps.imageUrl} alt={ProductProps.name} className="card-img-top" />
      <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
        <h4 className="card-title">{ProductProps.name}</h4>
        <p className="card-text">£ {ProductProps.price}</p>
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
