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


    //función para corroborar si esta o no en el carrito

    const isInCart = (id) =>{ //el id me viene del hijo isInCart

      return cart.some((prod) => prod.id === id) //por cada iteracción voy a preguntar si producto.id es igual a algún id

    }

    //función para eliminar un solo producto pasandole el id con filter

    const eliminarProd = (id) =>{

      console.log(`eliminamos un producto ${id}`);

      //utilizamos el filter para eliminar 

      const carritoFiltrado = cart.filter((prod) => prod.id !== id); //filtramos todos los productos y me elimina los productos que sean distintos de ese id

      setCart(carritoFiltrado); //Actualizamos el estado

    }


    //función para sumar cantidades del mismo producto

    const sumarCantidad = (item,qty) =>{ //me llega como argumento item y cantidad

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

    //función para saber cuantas unidades tengo en mi carrito

    const getProductQuantity = (id) =>{ //le pasamos el id porque es lo que queremos comparar

      const product = cart.find((prod) => prod.id === id) //recorremos mi carrito y va a preguntar si ese producto ya esta en el carrito

      return product?.qty; //retornamos la cantidad del producto que esta en el carrito (porque solo nos interesa eso)

    }

    //función para el total precio del carrito

    const totalPrice = () =>{

      let acumulador = 0; //creamos un acumulador

      cart.forEach((prod) => { //iteramos el carrito

        acumulador += prod.price * prod.qty  //multiplicamos el precio por la cantidad

      })

      return acumulador; //por cada vuelta retorno mi acumulador


    }

    //función calcular total de unidades para el cart widget 

    const totalQuantity = () =>{

      let acumulador = 0;

      cart.forEach((prod) => { //iteramos el carrito

        acumulador += prod.qty; //sumamos las unidades 

      })

      return acumulador; //por cada vuelta retorno mi acumulador

    }

    //función para el largo del carrito
    const totalProductos = () =>{

      return cart.length;


    }


    console.log(cart);




  return( //a traves del value paso mi estado y la función que setea mi estado
    <CartContext.Provider value={{cart,addItem,clearCart,eliminarProd,getProductQuantity,totalPrice,totalProductos}}> 

      {children} 

    </CartContext.Provider>
  ) 
  
}

export default CartProvider