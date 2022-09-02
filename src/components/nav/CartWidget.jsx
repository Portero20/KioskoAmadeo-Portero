import React from "react";
import "./cart.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = () => {
  return (

    <div className="containerCarrito">

      <span className="sizeCart"><AiOutlineShoppingCart /></span>
      <span className="colorNumber">0</span>

    </div>
    
    
  );
};

export default CartWidget;
