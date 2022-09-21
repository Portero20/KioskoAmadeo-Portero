import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'
import carritoVacio from '../../img/cartVacio.png'
import CarritoProductos from './CarritoProductos';
import "./carrito.scss";
import Formulario from '../form/Formulario';
import { useState } from 'react';
import gracias from "../../img/Gracias_por_su_compra.png"

const Cart = () => {

    const [idCompra, setIdCompra] = useState('');
    const {cart,clearCart,totalPrice} = useContext(CartContext);
    

    const handleId = (id) => {

      setIdCompra(id);

    };

    if(idCompra){

      return <div className='codReferencia'>
        <img src={gracias} alt="" />
        <h1>Tu código de referencia es: {idCompra} </h1>
      </div>
    
    }

  
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
          <h4 style={{fontWeight:'bolder'}}>Total: $ {totalPrice()} </h4>
        </div>

        <Formulario cart={cart} total={totalPrice()} clear={clearCart} handleId={handleId} />
        



    </div>
  )
}

export default Cart