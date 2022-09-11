import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const CartContext = createContext(); //creamos el contexto 

const CartProvider = ({children}) => {

    const [cart,setCart] = useState([]) //un array vacio porque todavia no agregue nada

    const addItem = (item,qty) =>{ //creamos una funcion para setear mi carrito

      if (isInCart(item.id)) { //para acceder al id tenemos que poner la función y pasarle el id

        //lo encuentro y le sumo la cantidad

        sumarCantidad(item,qty) //le pasamos item y qty para comparar
        
      } else { 
        
        //si no lo encuentra, lo setea en el carrito

        setCart([...cart,{...item,qty}]); //de esta manera adjuntamos cantidad dentro del objeto item, le pasamos cart tmb para que no se pise y me lo agregue
        
      }

    }

 
    //función para vaciar el carrito
    const clearCart = () => {

      setCart([]); //para vaciar el carrito tenemos que volver al estado inicial, ponemos nuestro estado con un array vacío

    }


    //función corroborar si esta o no en el carrito

    const isInCart = (id) =>{ //el id me viene del hijo isInCart

      return cart.some((prod) => prod.id === id) //por cada iteracción voy a preguntar si producto.id es igual a algún id

    }

    //función eliminar un solo producto pasandole el id con filter

    const eliminarProd = (id) =>{

      console.log(`eliminamos un producto ${id}`);

      //utilizamos el filter para eliminar 

      const carritoFiltrado = cart.filter((prod) => prod.id !== id); //filtramos todos los productos y me elimina los productos que sean distintos de ese id

      setCart(carritoFiltrado); //Actualizamos el estado

    }


    //sumar cantidades del mismo producto

    const sumarCantidad = (item,qty) =>{ //me llega como argumento item y cantidad

      const carritoActualizado = cart.map((prod) =>{ //por cada iteracción recorremos cada producto que tenga en el carrito

        //hacemos una validación 
        if (prod.id === item.id) { //preguntamos que producto tenemos que actualizar, si el prod.id que estoy iterando es igual al id del producto que estoy agregando al carrito

          const productoActualizado = {  //esto va a ser un objeto

            ...prod,  //spread para que se quede con todo lo que ya tenia en el objeto pero la cantidad la vamos a sobreescribir
            qty: prod.qty + qty //la cantidad va a ser lo que ya tenemos en el carrito y le sumamos

          }

          return productoActualizado; //retornamos para que me lo muestre
          
        } else { //si no se cumple 

          return prod; //retornamos la iteracción
          
        }

      }) 

      setCart(carritoActualizado)  //seteamos mi carrito actualizado porque nos llega un nuevo array


    }

    console.log(cart);




  return( //a traves del value paso mi estado y la función que setea mi estado
    <CartContext.Provider value={{cart,addItem,clearCart,eliminarProd}}> 
        {children} 
    </CartContext.Provider>
  ) 
  
}

export default CartProvider