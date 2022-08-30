import React from 'react'
import ItemCount from '../counter/ItemCount'
import '../items/items.scss'

const ItemDetail = ({product}) => {

  const onAdd = () =>{

    alert("Agregado al carrito");

  }

  return (
    <div className='estilosBoton'>
      
      
      <img src={product.img} alt="" width='130px'/>
      <h2 className='letraProductos'>{product.title}</h2>
      <h2 className='letraProductos'>{product.description}</h2>
      <h2 className='letraProductos'>${product.price}</h2>
      <ItemCount stock={10} initial={1} onAdd={onAdd}/>


    </div>
  )
}

export default ItemDetail