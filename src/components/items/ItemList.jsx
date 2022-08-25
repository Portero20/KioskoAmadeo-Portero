import React from 'react'
import Item from './Item';


const ItemList = ({estado}) => {
  return (
    <div>
        <div>

          <h2>Precios de los productos</h2>
          {

            estado.map((produ) => {

              return(
              
                <Item item={produ} key={produ.id}/>

              );
              

            })

          }

        </div>
    </div>
  )
}

export default ItemList