import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import {BrowserRouter} from 'react-router-dom';
import "./scss/index.scss";
import Main from "./components/main/Main";
import CartProvider from "./components/context/CartContext";

//podemos hacer un export de una constante, tiene un import diferente

//export const App = () => "Hola mundo"  // los componentes inician con la letra inicial en Mayuscula

//a Main le pasamos una clave-valor, lo que pasamos va a estar en llaves pero un string va en comillas, componente padre le pasa una propiedad a componente hijo

const App = () => {

  return (
    //JSX solo debe retornar un solo elemento, no es lo ideal tener muchas etiquetas dentro porque con react creamos componentes

    <CartProvider>

      <BrowserRouter>
        <Header />
        <Main/>
        <Footer />
      </BrowserRouter>
      

    </CartProvider>
   
  );
};

//Fragments: podemos quitar las etiquetas y dejarlo vacio, funciona igual pero con la diferencia que es invisible para el DOM
//Fragment sirve para el caso de que no quieras crear una etiqueta, tmb sirve para cuando querramos retornar mas de un elemento

export default App; //exportamos el componente para poder consumirlo en otro lado, solo debe haber uno por archivo
