import React from "react";
import Product from "../components/Product";

import { useState } from "react";
import { useEffect } from "react";

//get the data from the url

const Shop = () => {
  const apiUrl = "https://seed-theory-api.netlify.app/data.json";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          
          throw new Error("Network error");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // implemented a test for checking the network status is not ready, now implement the response
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="shop-content container">
      <div className="shop-title">
        <h2 className="text-center my-4">Our Plants</h2>
      </div>
      <div className="shop-products">
        <div className="row row-cols-1 rows-col-sm-2 row-cols-md-3 g-4">
          {data.map((product) => (
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
