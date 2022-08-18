import React from 'react'
import CartWidget from './CartWidget'
import estilosNav from './navbar.module.css'

const Navbar = () => {
  return (
        <nav className={estilosNav.navEstilo}>

                
                <ul>
                    
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                    
                    
                    

                </ul>
                
                <div className='carrito'>

                  <CartWidget/>

                </div>

                
                

                
        </nav>
        
  )
}

export default Navbar