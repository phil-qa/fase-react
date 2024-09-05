import React from "react";
import Product from "../components/Product";

const Shop = () => {
  return (
    <div className="shop-content">
      <div className="shop-title">
        <h2>Our Plants</h2>
      </div>
      <div className="shop-products">
        <Product />
      </div>
    </div>
  );
};

export default Shop;
