import React from "react";
import Product from "../components/Product";
import testData from "../externalData/data.json";

const Shop = () => {
  return (
    <div className="shop-content container">
      <div className="shop-title">
        <h2 className="text-center my-4">Our Plants</h2>
      </div>
      <div className="shop-products">
        <div className="row row-cols-1 rows-col-sm-2 row-cols-md-3 g-4">
          {testData.map((product) => (
            <div className="col" key={product.id}>
              <Product {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
