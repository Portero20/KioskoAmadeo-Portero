import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const CartContext = createContext(); //creamos el contexto 

const CartProvider = ({children}) => {

    const [cart,setCart] = useState([]) //un array vacio porque todavia no agregue nada

    const addItem = (item,qty) =>{ //creamos una funcion para setear mi carrito

      setCart([...cart,{...item,qty}]); //de esta manera adjuntamos cantidad dentro del objeto item, le pasamos cart tmb para que no se pise y me lo agregue

    }

    //función para vaciar el carrito
    const clearCart = () => {

      setCart([]);

    }

    //función eliminar un solo producto


    //función calcular total de unidades cart widget

    //calcular total precio


  return( //a traves del value paso mi estado y la función que setea mi estado
    <CartContext.Provider value={{cart,addItem,clearCart}}> 
        {children} 
    </CartContext.Provider>
  ) 
  
}

export default CartProvider