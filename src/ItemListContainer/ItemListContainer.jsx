import React, { useEffect, useState } from "react"; //rafce = React Arrow Function Export Component
import { useParams } from "react-router-dom";
import "animate.css";
import Spinner from 'react-bootstrap/Spinner'
import { products } from "../components/mock/productos";
import ItemList from "../components/items/ItemList";


//con react las clases las ponemos con: className y funciona igual que una class

const ItemListContainer = () => { 

  const {categoryID} = useParams();  //desestructuramos y esto me devuelve bebidas, golosinas y varios

  //Practica, el 99% de los casos las promesas no las estaremos haciendo a mano porque eso depende de la API si esta bien o mal

  const [productos,setProductos] = useState([]) //le ponemos corchetes porque nos va a llegar un array
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {


    const getProducts = new Promise ((res,rej) => { //si pongo res caera en el then y si pongo rej en el catch

      setTimeout(() => {

        const prodFiltrados = products.filter((prod) => prod.category === categoryID) //utilizamos filter porque es un array de objetos
        
        res(categoryID ? prodFiltrados : products) //esta respuesta va a caer en el then, por lo tanto me va a mostrar mi array
        
      }, 2000);
  
  
    })
    getProducts
    .then((response) => { //en los parentesis cae la resolucion de la promesa
  
      setProductos(response);  //guardamos en mi estado productos el response que me llega,setProductos actualiza mi estado cuando me llega el response
  
  
    })  
    .catch((err) =>{
  
      console.error(err);   //salio todo mal
      
    })
    .finally(() =>{
  
      setLoading(false)  //se ejecuta siempre
  
    })


  },[categoryID]) //le pasamos el array de dependencias categoryName, cuando cambie la URL se va a volver a ejecutar

  


  return (
    
    <div className="contenedorSpinner">

      {
        isLoading ? <Spinner style={{padding:'25px',marginBottom:'41rem'}} animation="border" role="status" className="spinnerContainer"> 
        <span className="visually-hidden spinner">Loading...</span>
        </Spinner> : <ItemList estado={productos}/>
      }

    </div>
    
  );
};

export default ItemListContainer;

//las props se pasan en la etiqueta del componente al cual le quiero pasar información y se reciben en el cuerpo de la función
