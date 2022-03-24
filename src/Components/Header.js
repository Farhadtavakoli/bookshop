import React from "react";
import "../Stylings/Header.css";
import Cart from "./Cart";

function Header() {
  return (
    <div className="Container">
      <div className="logo">
        <h1>Book</h1>
      </div>
      <Cart />
    </div>
  );
}

export default Header;
