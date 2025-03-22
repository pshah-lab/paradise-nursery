import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cart }) => {
  return (
    <header>
      <Link to="/">Paradise Nursery</Link>
      <Link to="/cart">🛒 {cart.length}</Link>
    </header>
  );
};

export default Header;