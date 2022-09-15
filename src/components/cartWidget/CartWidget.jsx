import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../context/CartContext";
import "./cartWidget.scss";

const CartWidget = () => {

  const {totalQuantity,totalProductos} = useContext(CartContext);


  return (

    <div className="containerCarrito">

      <span className="sizeCart"><AiOutlineShoppingCart /></span>
      <span style={{textDecoration:'none'}} className="colorNumber">{totalQuantity() === 0 ? "" : totalQuantity()}</span>

    </div>
    
    
  );
};

export default CartWidget;
