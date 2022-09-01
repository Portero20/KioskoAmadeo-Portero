import React from 'react'
import ItemCount from '../counter/ItemCount'
import '../items/items.scss'

const ItemDetail = ({product}) => {

  const onAdd = () =>{

    alert("Agregado al carrito");

  }

  return (
    <div className='estilosBoton'>

      <div className="wrapper">
        <div className="product-img">
          <img src={product.img} height="420" width="327"></img>
        </div>
        <div className="product-info">
          <div className="product-text">
            <h1>{product.title}</h1>
            <p>{product.description} </p>
          </div>
          <div className="product-price-btn">
            <p className='spanPrice'>Precio: ${product.price}</p>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/> 
          </div>
        </div>
      </div>



    </div>
    )
    }

export default ItemDetail


{/* <img src={product.img} alt="" width='130px'/>
      <h2 className='letraProductos'>{product.title}</h2>
      <h2 className='letraProductos'>{product.description}</h2>
      <h2 className='letraProductos'>${product.price}</h2>
      <ItemCount stock={10} initial={1} onAdd={onAdd}/> */}