import React from "react";

const Product = ({ name, price, imageUrl }) => {
  return (
    <div className="card h-100">
      <img src={imageUrl} alt={name} className="card-img-top" />
      <div className="card-body d-flex flex-column">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">£ {price}</p>
        <button className="btn btn-light mt-auto">Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
