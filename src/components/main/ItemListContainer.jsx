import React, { useEffect, useState } from "react"; //rafce = React Arrow Function Export Component
import Layout from "../layout/Layout";
import estilosM from "./main.module.scss"; //trabajamos con modulos, le pone un id a la clase automaticamente, con modulos evitamos que se pise
import "animate.css";
import Cards from "../cards/Cards";
import CardCliente from "../cards/CardCliente";
import ItemCount from "../counter/ItemCount";
import { products } from "../mock/productos";
import '../items/items.scss'
import ItemList from "../items/ItemList";


//con react las clases las ponemos con: className y funciona igual que una class

const ItemListContainer = ({test}) => { //test es un objeto, para acceder al valor del main es test mediante llaves para decirle que es js


  //Practica, el 99% de los casos las promesas no las estaremos haciendo a mano porque eso depende de la API si esta bien o mal

  const [productos,setProductos] = useState([]) //le ponemos llaves porque va a ser un array

  useEffect(() => {

    const getProducts = new Promise ((res,rej) => { //si pongo res caera en el then y si pongo rej en el catch

      setTimeout(() => {
        
        res(products) //esta respuesta va a caer en el then
        
      }, 2000);
  
  
    })
    getProducts
    .then((response) => { //en los parentesis cae la resolucion de la promesa
  
      setProductos(response );  //salio todo bien
  
  
    })  
    .catch((err) =>{
  
      console.log(err);   //salio todo mal
      
    })
    .finally(() =>{
  
      console.log('Llego al final');  //siempre se va a ejecutar
  
    })


  },[])

  

  const onAdd = () =>{

    alert("Agregado al carrito");

  }


  return (
    <main className={estilosM.MainEstilo}>
      <section className="flexSection">
        <h2 style={{ fontWeight: "bolder",color:'black' }} className="animate__animated animate__bounceIn">Bienvenidos a Drugstore Amadeo</h2>

        <Layout>
          <h2 style={{ fontWeight: "bolder", color:'black' }} className="animate__animated animate__bounceIn">{test}</h2>
        </Layout>

        <ItemCount stock={10} initial={1} onAdd={onAdd} />

        <Cards/>

        <CardCliente/>

        <ItemList estado={productos}/>

      </section>
    </main>
  );
};

export default ItemListContainer;

//las props se pasan en la etiqueta del componente al cual le quiero pasar información y se reciben en el cuerpo de la función
