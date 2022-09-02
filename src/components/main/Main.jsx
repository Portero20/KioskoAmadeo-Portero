import React from 'react'
import estilosM from "./main.module.scss"; //trabajamos con modulos, le pone un id a la clase automaticamente, con modulos evitamos que se pise
import { Route, Routes } from 'react-router-dom';
import ItemListContainer from '../../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../items/ItemDetailContainer';
import Home from './Home';
import Cart from '../nav/Cart'

const Main = () => {
  return (
    <main className={estilosM.MainEstilo}>
      <section className="flexSection">


        <Routes>

          <Route path='/category/:categoryID' element={<ItemListContainer/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/tienda' element={<ItemListContainer/>}/>
          <Route path='/detail/:itemID' element={<ItemDetailContainer/>} />

           
        </Routes>


      </section>
    </main>
  )
}

export default Main