import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CarritoProductos = ({product}) => {

    const {clearCart} = useContext(CartContext)

  return (
    <div key={product.id}>

        <div className='containerFlex'>

            <div className='containerCompras'>


                <div className='flexUbicar'>
                    <h3 className='tituloCompra'>{product.title}</h3>
                    <h3 className='precioTitulo'>${product.price}</h3>
                    <h3 className='tituloCategoria'>{product.category}</h3>
                    <h3 className='stockTitulo'>{product.stock}</h3>
                    <img className='productosCarrito' src={product.img} alt="" />
                    <button onClick={clearCart}>Vaciar carrito</button>
                </div>



            </div>



        </div>

    </div>


    )
}

export default CarritoProductos