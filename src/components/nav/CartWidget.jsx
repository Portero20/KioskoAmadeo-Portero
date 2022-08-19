import React from "react";
import "./cart.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = () => {
  return (

    <div className="containerCarrito" style={{display:'flex',justifyContent:'flex-end'}}>

      <span className="sizeCart"><AiOutlineShoppingCart /></span>
      <span className="colorNumber">10</span>

    </div>
    
    
  );
};

export default CartWidget;
