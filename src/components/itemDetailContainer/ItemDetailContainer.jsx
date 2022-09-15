import React,{useState,useEffect} from 'react'
import Spinner from 'react-bootstrap/Spinner';
import { products } from '../mock/productos'
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/ItemDetail';
import { doc, getDoc, collection } from "firebase/firestore";
import { db } from "../../../src/components/firebase/firebaseConfig";

const ItemDetailContainer = () => {

  const {itemID} = useParams()
  const [product,setProduct] = useState({})
  const [isLoading, setLoading] = useState(true) //para el loading y lo inicializamos con un valor booleano
  const idProdNumerico = Number(itemID) //tenemos que pasarlo a number porque si no lo va a leer como String


  useEffect(() => {

    const obtenerProducts = new Promise((res,rej) => {

      setTimeout(() => {

        const unicoProducto = products.find((prod) => prod.id === idProdNumerico);  //me encuentra el producto por el id en este caso idProdNumerico (me encuentra la primer coincidencia)

        res(idProdNumerico ? unicoProducto : products) //utilizamos operador ternario para que el código no sea largo
        
      }, 500);

    })
    obtenerProducts
    .then((response) => {

      setProduct(response)
      setLoading(false);

    })
    .catch((error) =>{

      console.error(error);

    })
    return () =>{

      setLoading(true)

    }


  },[itemID])


  return (
    
    <div className='contenedorSpinner'>

      {
        isLoading ? <Spinner style={{padding:'25px',marginBottom:'43rem'}} animation="border" role="status" className='spinnerContainer'> 
        <span className="visually-hidden spinner">Loading...</span>
        </Spinner> : <ItemDetail product={product} key={product.id}/>
      }
      
    </div>
  )
}

export default ItemDetailContainer




// const detailCollection = collection(db,"productos");

//    const ref = doc(detailCollection,itemID);

//    getDoc(ref)
//    .then((res) =>{


//     setProduct({
      
//       id: res.id,
//       ...res.data(),
      
//     })

//     console.log(res);



//    })
//    .catch((error) =>{

//     console.error(error);


//    })
//    .finally(() =>{

//     setLoading(false);

//    })