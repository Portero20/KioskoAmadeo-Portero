import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const CartContext = createContext();  

const CartProvider = ({children}) => {

    const [cart,setCart] = useState([]) 

    const addItem = (item,qty) =>{ 

      if (isInCart(item.id)) { 

        

        sumarCantidad(item,qty) 
        
      } else { 
        
        

        setCart([...cart,{...item,qty}]); 
        
      }

    }

 
    
    const clearCart = () => {

      setCart([]); 

    }


    

    const isInCart = (id) =>{ 

      return cart.some((prod) => prod.id === id) 

    }

   

    const eliminarProd = (id) =>{

      console.log(`eliminamos un producto ${id}`);

      //utilizamos el filter para eliminar 

      const carritoFiltrado = cart.filter((prod) => prod.id !== id); //filtramos todos los productos y me elimina los productos que sean distintos de ese id

      setCart(carritoFiltrado); //Actualizamos el estado

    }


    

    const sumarCantidad = (item,qty) =>{ 

      const carritoActualizado = cart.map((prod) =>{ //por cada iteracción recorremos cada producto que tenga en el carrito, map retorna un nuevo array

        //hacemos una validación 
        if (prod.id === item.id) { //preguntamos que producto tenemos que actualizar, si el prod.id que estoy iterando es igual al id del producto que estoy agregando al carrito

          const productoActualizado = {  //esto va a ser un objeto

            ...prod,  //spread para que se quede con todo lo que ya tenia en el objeto pero la cantidad la vamos a sobreescribir
            qty: qty, //pisamos la cantidad para nunca tener más del stock

          }

          return productoActualizado; //retornamos para que me lo muestre
          
        } else { //si no se cumple, el map siempre debe retornar algo

          return prod; //retornamos la iteracción (mi prod no actualizado), si no pongo este return no va a retornar nada
          
        }

      }); 

      setCart(carritoActualizado)  //seteamos mi carrito actualizado porque nos llega un nuevo array


    }

    

    const getProductQuantity = (id) =>{ 

      const product = cart.find((prod) => prod.id === id) //recorremos mi carrito y va a preguntar si ese producto ya esta en el carrito

      return product?.qty; //retornamos la cantidad del producto que esta en el carrito (porque solo nos interesa eso)

    }

    

    const totalPrice = () =>{

      let acumulador = 0; //creamos un acumulador

      cart.forEach((prod) => { //iteramos el carrito

        acumulador += prod.price * prod.qty  //multiplicamos el precio por la cantidad

      })

      return acumulador; //por cada vuelta retorno mi acumulador


    }

    

    const totalQuantity = () =>{

      let acumulador = 0;

      cart.forEach((prod) => { 

        acumulador += prod.qty;  

      })

      return acumulador; 

    }

   
    const totalProductos = () =>{

      return cart.length;


    }


    console.log(cart);




    return( 
    <CartContext.Provider value={{cart,addItem,clearCart,eliminarProd,getProductQuantity,totalPrice,totalProductos}}> 

      {children} 

    </CartContext.Provider>
  ) 
  
}

export default CartProvider