import React from 'react'
import './cards.scss'
import imagenBebidas from '../../img/bebidas.png'
import imagenGolosinas from '../../img/golosinas.png'
import imagenVariedad from '../../img/variedad.png'
import "animate.css";


const Cards = () => {
  return (
    <div className='contenedorTarjetas'>

      <div className="tarjeta animate__animated animate__bounceIn">
        
        <h2><img src={imagenBebidas} alt="" className='imagenEstilo'/>Bebidas</h2>
      </div>

      <div className="tarjeta animate__animated animate__bounceIn">
      <h2><img src={imagenGolosinas} alt="" className='imagenEstilo'/>Golosinas</h2>
      </div>

      <div className="tarjeta animate__animated animate__bounceIn">
      <h2><img src={imagenVariedad} alt="" className='imagenEstilo imagenVariedad'/>Variedad</h2>
      </div>

    </div>

    


  )
}

export default Cards