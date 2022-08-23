import React from "react"; //rafce = React Arrow Function Export Component
import Layout from "../layout/Layout";
import estilosM from "./main.module.scss"; //trabajamos con modulos, le pone un id a la clase automaticamente, con modulos evitamos que se pise
import "animate.css";
import Cards from "../cards/Cards";
import CardCliente from "../cards/CardCliente";
import ItemCounter from "../counter/ItemCounter";
import Texto from "../Texto";


//con react las clases las ponemos con: className y funciona igual que una class

const ItemListContainer = (props) => { //props es un objeto, para acceder al valor del main es props.test mediante llaves para decirle que es js


  const otraFuncion = (param) =>{

    console.log(param);

  }




  
  const {test,saludar} = props; //creamos una constante para llamar a cada una de las propiedades



  return (
    <main className={estilosM.MainEstilo}>
      <section className="flexSection">
        <h2 style={{ fontWeight: "bolder",color:'black' }} className="animate__animated animate__bounceIn">Bienvenidos a Drugstore Amadeo</h2>

        <Layout>
          <h2 style={{ fontWeight: "bolder", color:'black' }} className="animate__animated animate__bounceIn">{test}</h2>
        </Layout>

        <h2 onClick={() => otraFuncion('parametro')}>

        Bienvenidos {saludar}
          
        </h2>

        <ItemCounter/>

        <Texto/>

        <Cards/>

        <CardCliente/>

      </section>
    </main>
  );
};

export default ItemListContainer;

//las props se pasan en la etiqueta del componente al cual le quiero pasar información y se reciben en el cuerpo de la función
