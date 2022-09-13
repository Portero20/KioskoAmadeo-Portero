import React, { useContext } from "react";
import "./cart.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {

  const {totalQuantity} = useContext(CartContext);


  return (

    <div className="containerCarrito">

      <span className="sizeCart"><AiOutlineShoppingCart /></span>
      <span className="colorNumber">{totalQuantity() === 0 ? "" : totalQuantity()}</span>

    </div>
    
    
  );
};

export default CartWidget;
