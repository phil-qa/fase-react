import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="app-header">
      <div className="bg-success text-white py-3">
        <div className="container">
          <h1 className="text-center mb-0">seed theory</h1>
        </div>
      </div>
      <div className="app-navbar container d-flex justify-content-center border-bottom border-2">
        <Link
          to="/"
          className="text-decoration-none me-3 fs-3 font-monospace text-black-50"
        >
          Home
        </Link>
        <Link
          to="/shop"
          className="text-decoration-none ms-3 fs-3 font-monospace text-black-50"
        >
          Shop
        </Link>
      </div>
    </header>
  );
};

export default Header;
