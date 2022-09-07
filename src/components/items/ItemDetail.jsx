import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../counter/ItemCount'
import '../items/items.scss'


const ItemDetail = ({product}) => {

  const [cantidad,setCantidad] = useState(0);

  const onAdd = (cantidad) =>{

    setCantidad(cantidad);

  }



  return (
    <div className='estilosBoton'>

      <div className="wrapper">
        <div className="product-img">
          <img src={product.img} className="imgProducto"></img>
        </div>
        <div className="product-info">
          <div className="product-text">
            <h1>{product.title}</h1>
            <p>{product.description} </p>
          </div>
          <div className="product-price-btn">
            <p className='spanPrice'>Precio: ${product.price}</p>
            
            {
              cantidad === 0 ? <ItemCount stock={product.stock} initial={1} onAdd={onAdd} /> : <Link to="/cart" className='verCarrito'>Ver carrito</Link>
            }

          </div>
        </div>
      </div>

    </div>
    )
  }

export default ItemDetail

