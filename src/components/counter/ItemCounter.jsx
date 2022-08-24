import React, {useState} from 'react'

const ItemCounter = ({stock,initial,onAdd}) => {

    const [count,setCount] = useState(initial) //lee mi estado y ve que el valor inicial es 1

    const sumar = () =>{

        if(count < stock) {   //si count es menor al tope le sumaremos 1, cuando llegue al tope del stock ya no me va a dejar sumar
            
            setCount(count+1)  //lo suma

        } else {
            
            alert("Máximo de stock") //si no saltara este mensaje

        }

       

    }


    const restar = () => {


        if (count > 1) {  // si count es mayor le resta 1
            
            setCount(count-1) //lo resta

        } else {

            alert("No se puede agregar 0 productos")
            
        }

    }

  return (
    <div>

        <button style={{width:'30px', margin:'0 10px 0 2px', fontWeight:'bolder'}} onClick={sumar}>+</button>
        <button style={{width:'30px',fontWeight:'bolder'}} onClick={restar}>-</button>
        <p style={{fontWeight:'bolder'}}>Count:{count}</p> 
        <button style={{fontWeight:'bolder'}} onClick={onAdd}>Agregar al carrito</button>

    </div>
  )
}

export default ItemCounter