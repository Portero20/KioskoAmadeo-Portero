import React, {useState} from 'react'

const ItemCounter = () => {

    const [count,setCount] = useState(0) //lee mi estado y ve que el valor inicial es 0

    const sumar = () =>{

        if(count < tope) {   //si count es menor al tope le sumaremos 1
            
            setCount(count+1)  //lo suma

        } else {
            
            alert("Alcanzo el tope")

        }

       

    }

    let tope = 10;   //queremos que el contador llegue a 10

    const restar = () => {

        if (count > 0) {
            
            setCount(count-1) //lo resta

        } else {

            alert("No existen valores negativos")
            
        }

    }

  return (
    <div>

           <button onClick={sumar}>+</button>
           <button onClick={restar}>-</button>
           <p style={{fontWeight:'bolder'}}>Count: {count}</p> 
           <button disabled={count === 0}>Agregar al carrito</button>

    </div>
  )
}

export default ItemCounter