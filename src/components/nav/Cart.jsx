import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CarritoProductos from './CarritoProductos';

const Cart = () => {

  const {cart,clearCart} = useContext(CartContext);


  return (
    <div>

        <h2 className='carritoTitulo'>Carrito</h2>

        {

          cart.map((product) => {

            return(

              <CarritoProductos product={product} key={product.id}/>

            );

          })

        }

         <button className='clearCart' onClick={clearCart}>Vaciar carrito</button>



    </div>
  )
}

export default Cart