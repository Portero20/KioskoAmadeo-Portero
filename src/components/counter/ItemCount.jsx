import React, {useState} from 'react'

const ItemCount = ({stock,initial,onAdd}) => {

    const [count,setCount] = useState(initial) //lee mi estado y ve que el valor inicial es 1

    const sumar = () =>{

        if(count < stock) {   //si count es menor al tope le sumaremos 1, cuando llegue al tope del stock ya no me va a dejar sumar
            
            setCount(count+initial)  //lo suma

        } else {
            
            alert("Máximo de stock") //si no saltara este mensaje

        }

       

    }


    const restar = () => {


        if (count > initial) {  // si count es mayor le resta 1
            
            setCount(count-initial) //lo resta

        } else {

            alert("No se puede agregar 0 productos")
            
        }

    }

  return (
    <div>

        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <p>Count:{count}</p> 
        <button onClick={onAdd}>Agregar al carrito</button>

    </div>
  )
}

export default ItemCount