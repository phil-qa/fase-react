import React from "react";

const testData = {
  id: "peacockPlant",
  name: "Peacock Plant",
  price: 18,
  imageUrl:
    "https://user-images.githubusercontent.com/118732445/203822768-69c9b5bb-da36-4b22-9f27-deffdb0488e2.jpg",
};

const Shop = () => {
  return (
    <div className="shop-content">
      <div className="shop-title">
        <h2>Our Plants</h2>
      </div>
      <div className="shop-products">
        <div className="product">
          <h4>{testData.name}</h4>
          <p>{testData.price}</p>
          <img src={testData.imageUrl} alt="A planty thing" />
        </div>
      </div>
    </div>
  );
};

export default Shop;
