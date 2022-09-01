import React from 'react'
import estilosM from "./main.module.scss"; //trabajamos con modulos, le pone un id a la clase automaticamente, con modulos evitamos que se pise
import { Route, Routes } from 'react-router-dom';
import ItemListContainer from '../../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../items/ItemDetailContainer';
import Home from './Home';

const Main = () => {
  return (
    <main className={estilosM.MainEstilo}>
      <section className="flexSection">


        <Routes>

            <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='products' element={<ItemListContainer/>}/>
            <Route path='/detail/:idProd' element={<ItemDetailContainer/>} />

           
        </Routes>


      </section>
    </main>
  )
}

export default Main