import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
        <nav className='barraNav'>
                <ul>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
        </nav>
  )
}

export default Navbar