import React, {useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import "../counter/count.scss"

const ItemCount = ({stock,onAdd,initial = 1}) => {

    const [count,setCount] = useState(initial) //lee mi estado y ve que el valor inicial es 1

    
    useEffect(() =>{ //utilizamos un useEffect

        setCount(initial) //setea el contador con el num inicial

    },[initial]); //escucha si cambia el numero inicial


    const sumar = () =>{

        if(count < stock) {   //si count es menor al tope le sumaremos 1, cuando llegue al tope del stock ya no me va a dejar sumar
            
            setCount(count+1)  //lo suma

        } else {
            
            toast('Máximo de stock', {
                icon: '❗',
              }); //si no saltara este mensaje

        }

       

    }


    const restar = () => {


        if(count > 1) {  // si count es mayor le resta 1
            
            setCount(count-1) //lo resta

        } else {

            toast.error("No se pueden agregar 0 productos.");

            
        }

    }

    const agregar = () =>{

        onAdd(count)

    }
    
    const agregarCarro = () => toast.error("No se pueden agregar 0 productos.");

  return (
    <div>

        <div className='contenedorContador'>

            <p className='count' style={{fontWeight:'bolder'}}>Cantidad : {count}</p> 
            <button className='botonSumar' onClick={sumar}>+</button>
            <button className='botonRestar' onClick={restar}>-</button>


            <Toaster
                position="bottom-right"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    duration: 2000,
                    style: {
                     background: '#363636',
                     color: '#fff',
                    },

                }}
            />

        </div>
        
        <button className='botonAgregar' onClick={agregar}>

            Agregar al carrito

            
        </button>

    </div>
  )
}

export default ItemCount