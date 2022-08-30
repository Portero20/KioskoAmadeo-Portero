import React,{useState,useEffect} from 'react'
import Spinner from 'react-bootstrap/Spinner';
import ItemDetail from './ItemDetail'
import { products } from '../mock/productos'

const ItemDetailContainer = () => {

  const [product,setProduct] = useState({})
  const [isLoading, setLoading] = useState(true) //para el loading y lo inicializamos con un valor booleano


  useEffect(() => {

    const obtenerProducts = new Promise((res,rej) => {

      const unicoProducto = products.find((prod) => prod.id === 2);  //me encuentra el producto por el id en este caso 2

      setTimeout(() => {

        res(unicoProducto);
        
      }, 3000);

    })
    obtenerProducts
    .then((response) => {

      setProduct(response)

    })
    .catch((error) =>{

      console.error(error);

    })
    .finally(() => {

      setLoading(false)

    })


  },[])


  return (
    
    <div>

      {
        isLoading ? <Spinner animation="border" role="status"> 
        <span className="visually-hidden">Loading...</span>
        </Spinner> : <ItemDetail product={product} key={product.id} />
      }
      
    </div>
  )
}

export default ItemDetailContainer