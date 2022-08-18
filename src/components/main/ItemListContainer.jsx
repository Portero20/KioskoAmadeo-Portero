import React from 'react'  //rafce = React Arrow Function Export Component
import Layout from '../../Layout';
import estilosM from './main.module.css' //trabajamos con modulos, le pone un id a la clase automaticamente, con modulos evitamos que se pise

//con react las clases las ponemos con: className y funciona igual que una class

const ItemListContainer = (props) => {  //props es un objeto, para acceder al valor del main es props.test mediante llaves para decirle que es js


  const {test,describir} = props;  //creamos una constante para llamar a cada una de las propiedades
  
  
  return (
    
        <main className={estilosM.MainEstilo}>
            <section>

                <h2 style={{textAlign:'center'}}>Bienvenidos a Kiosko Amadeo</h2>

                <Layout>
                <h2 style={{textAlign:'center'}}>{test}</h2> 

                </Layout>

                <Layout>

                <h2 style={{textAlign:'center'}}>{describir}</h2> 

                </Layout>
                

            </section>
        </main>

  )
}

export default ItemListContainer

//las props se pasan en la etiqueta del componente al cual le quiero pasar información y se reciben en el cuerpo de la función