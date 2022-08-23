//Practicamos estados con nombres
import React, { useState, useEffect } from 'react'

const Texto = () => {

    const [nombre,setNombre] = useState("Exequiel")

    const [valorBooleano,setValorBooleano] = useState(true)

    const cambiarNombre = () =>{

        if (nombre === "Daniel") {  //si nombre es igual a Daniel

            setNombre("Exequiel")  //si es verdadero
            
        } else {

            setNombre("Daniel")  //si es falso
            
        }

    }

    const cambiarValor = () =>{

        setValorBooleano(!valorBooleano)  //! le estamos diciendo que cambie el valor

    }

    //Sin parametro
    useEffect(()=>{ //acá podemos ejecutar código

        console.log("Me ejecuto siempre");

    })
    


    //Con parametro, se ejecutara solo una vez por el array vacio, no tiene una logica de por que se ejecuta una sola vez
    useEffect(()=>{ //acá podemos ejecutar código

        //tareas pesadas
        //pedidos a una bd
        console.log('Me ejecuto una sola vez');
        

    },[])


    //useEffect con dependencia, se ejecuta una sola vez y cada vez que cambie la dependencia
    useEffect(()=>{ //acá podemos ejecutar código

        //tareas pesadas
        //pedidos a una bd
        console.log(`Me ejecuto una sola vez y cada vez que cambie la dependencia ${valorBooleano} `);
        

    },[valorBooleano])
    





  return (
    <div>

        <p style={{fontWeight:'bolder'}}>Mi nombre es: {nombre} </p>
        { //esto es un operador ternario que verifica la condición
           valorBooleano
           ? <h1>El valor es true</h1>
           : <h1>El valor es false</h1>
        }
        <button onClick={cambiarNombre}>Cambiar nombre</button>
        <button onClick={cambiarValor}>Cambiar valor</button>

    </div>
  )
}

export default Texto