import React from 'react'

const Item = ({item}) => {
    return (
        <div className="productosItems">
            <h4 className="titulo">{item.title}</h4>
            <h5 className="titulo">${item.price}</h5>
            <img className="imagenProductos" src={item.img} alt="" />
        </div>
    )
}

export default Item