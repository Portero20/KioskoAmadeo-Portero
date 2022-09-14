import React, { useContext } from "react";
import "./cart.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {

  const {totalQuantity,totalProductos} = useContext(CartContext);


  return (

    <div className="containerCarrito">

      <span className="sizeCart"><AiOutlineShoppingCart /></span>
      <span style={{textDecoration:'none'}} className="colorNumber decoration">{totalProductos() === 0 ? "" : totalProductos()}</span>

    </div>
    
    
  );
};

export default CartWidget;
