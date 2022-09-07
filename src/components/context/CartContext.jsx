import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const CartContext = createContext(); //creamos el contexto 

const CartProvider = ({children}) => {

    const {cart,setCart} = useState([]) //un array vacio porque todavia no agregue nada

    const addToCart = (product,qty) =>{ //creamos una funcion para setear mi carrito

        if (condition) {

            //logica de que encuentra el producto y suma la cantidad
            
        } else {
            
            setCart([...cart,{...product,qty}]); //de esta manera adjuntamos cantidad dentro del objeto item, le pasamos cart tmb para que no se pise y me lo agregue

        }

    }

  return( //a traves del value paso mi estado y la función que setea mi estado
    <CartContext.Provider value={{cart,addToCart}}> 
        {children} 
    </CartContext.Provider>
  ) 
  
}

export default CartProvider