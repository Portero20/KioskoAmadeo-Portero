import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'
import carritoVacio from '../../img/cartVacio.png'
import CarritoProductos from './CarritoProductos';

const Cart = () => {

  const {cart,clearCart,totalPrice} = useContext(CartContext);
  

    if(cart.length === 0){

      return(
        <div>
          <div className='flexVacio'>
            <h2 style={{fontWeight:'bolder'}}>Carrito Vacío</h2>
            <img src={carritoVacio} alt="" className='cartVacio' />
            <Link to="/tienda" className='linkCondition'>

              Empeza a comprar

            </Link>
          </div>
          
        </div>
      )

    }


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

        <div className='containerButton'>
          <button className='clearCart' onClick={clearCart}>🗑️ Vaciar</button>
          <button className='finalizarButton'>Finalizar Compra</button>
          <h4 style={{fontWeight:'bolder'}}>Total: $ {totalPrice()} </h4>
        </div>

        



    </div>
  )
}

export default Cart