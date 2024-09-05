import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="app-header">
      <div className="title-bar">
        <h1 className="app-title">seed theory</h1>
      </div>
      <div className="app-navbar">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>
    </header>
  );
};

export default Header;
