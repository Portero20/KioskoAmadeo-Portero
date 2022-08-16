//Esto solo pasara en el index (un lugar solo de nuestro proyecto)
//Webpack es un empaquetador de modulos (create-react-app funciona con webpack por defecto)

import React from 'react';  //importamos la libreria de React (es lo primero que se hace)
import ReactDOM from 'react-dom/client';  //importamos la libreria de react-dom (nos ayuda a renderizar nuestra app en el DOM)

import App from './App'  //importamos el archivo App.jsx -> export default
//import {App} from './App'  //importamos la constante entre llaves para que funcione -> export nombrado




const root = ReactDOM.createRoot(document.getElementById('root')); //le indicamos un punto de entrada (createRoot es para poder mostrarlo en el DOM)

root.render(<App />); //empezamos a renderizar nuestra app


//<App/> es la forma de ejecutar la funcion en react, asi llamamos a las funciones
//App() ponerlo de esta forma no es la que recomienda react porque va a tirar un warning porque no es react


