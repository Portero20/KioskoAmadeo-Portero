import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const CartContext = createContext(); //creamos el contexto 

const CartProvider = ({children}) => {

    const [cart,setCart] = useState([]) //un array vacio porque todavia no agregue nada

    const addItem = (item,qty) =>{ //creamos una funcion para setear mi carrito

      if (isInCart(item.id)) {

        //lo encuentro y le sumo la cantidad

        sumarCantidad(item,qty)
        
      } else {

        setCart([...cart,{...item,qty}]); //de esta manera adjuntamos cantidad dentro del objeto item, le pasamos cart tmb para que no se pise y me lo agregue
        
      }

    }

 
    //función para vaciar el carrito
    const clearCart = () => {

      setCart([]);

    }


    //función corroborar si esta o no en el carrito

    const isInCart = (id) =>{

      return cart.some((prod) => prod.id === id)

    }

    //función eliminar un solo producto pasandole el id 

    const eliminarProd = (id) =>{

      console.log(`eliminamos un producto ${id}`);

      //utilizamos el filter para eliminar 

      const carritoFiltrado = cart.filter((prod) => prod.id !== id); //filtramos todos los productos y nos quedamos con todos los que no sean ese id

      setCart(carritoFiltrado); //Actualizamos el estado

    }


    //sumar cantidades del mismo producto

    const sumarCantidad = (item,qty) =>{ //me llega como argumento item y cantidad

      const carritoActualizado = cart.map((prod) =>{ //por cada iteracción recorremos cada producto que tenga en el carrito


        if (prod.id === item.id) { 

          const productoActualizado = {  //esto va a ser un objeto

            ...prod,  //spread para que se quede con todo lo que ya tenia en el objeto pero la cantidad la vamos a sobreescribir
            qty: prod.qty + qty //la cantidad va a ser lo que ya tenemos en el carrito y le sumamos

          }

          return productoActualizado;
          
        } else {

          return prod;
          
        }

      }) 

      setCart(carritoActualizado)  //seteamos mi carrito actualizado


    }

    console.log(cart);




  return( //a traves del value paso mi estado y la función que setea mi estado
    <CartContext.Provider value={{cart,addItem,clearCart,eliminarProd}}> 
        {children} 
    </CartContext.Provider>
  ) 
  
}

export default CartProvider