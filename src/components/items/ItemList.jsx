import React from 'react'
import Item from './Item';


const ItemList = ({estado}) => {
  return (
    <div>
        <div>

          <h2>Precios de los productos</h2>
          {

            estado.map((produ) => { //recibe un callback (el resultado de cada iteraccion voy a recorrer un producto)

              return( //retornamos cada uno de los productos
              
                <Item item={produ} key={produ.id}/>

              );
              

            })

          }

        </div>
    </div>
  )
}

export default ItemList