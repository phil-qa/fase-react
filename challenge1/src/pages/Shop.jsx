import React from "react";
import Product from "../components/Product";
import testData from "../externalData/data.json";

const Shop = () => {
  return (
    <div className="shop-content">
      <div className="shop-title">
        <h2>Our Plants</h2>
      </div>
      <div className="shop-products">
        {testData.map((product) => (
          <Product {...product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
