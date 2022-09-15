import React, { useEffect, useState } from "react"; //rafce = React Arrow Function Export Component
import { useParams } from "react-router-dom";
import "animate.css";
import Spinner from 'react-bootstrap/Spinner'
import { products } from "../components/mock/productos";
import ItemList from "../components/itemList/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../src/components/firebase/firebaseConfig";

//con react las clases las ponemos con: className y funciona igual que una class

const ItemListContainer = () => { 

  const {categoryID} = useParams();  //desestructuramos y esto me devuelve bebidas, golosinas y varios

  //Practica, el 99% de los casos las promesas no las estaremos haciendo a mano porque eso depende de la API si esta bien o mal

  const [productos,setProductos] = useState([]) //le ponemos corchetes porque nos va a llegar un array
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {

    const itemCollection = collection(db,"productos");

    const q = query(itemCollection,where("category","==",categoryID));
    
    getDocs(q)

    .then((resp) => {

      console.log(resp);
      
      const products = resp.docs.map((produ)=>{

        return{ //en este return metemos el id dentro de todos mis campos(colección), acá estamos creando un nuevo array de productos

          ...produ.data(), //acá accedemos a toda la información de mi colección
          id: produ.id, //acá agreamos el id (el id esta dentro de prod)


        };

        


      });

      setProductos(products);
      console.log(products);


    })
    .catch((error) =>{
      console.log(error);
    })
    .finally(() =>{

      setLoading(false);

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
