import React from "react";
import "./cart.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = () => {
  return (
    <span className="sizeCart">
      <AiOutlineShoppingCart />
    </span>
  );
};

export default CartWidget;
