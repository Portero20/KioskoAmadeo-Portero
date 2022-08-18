import Navbar from '../nav/Navbar';  //no se le pone .jsx porque webpack ya reconoce que estamos trabajando con jxs
import estiloH from './header.module.css' //trabajamos con modulos, le pone un id a la clase automaticamente, con modulos evitamos que se pise

const Header = () =>{

    return(

        <header className= {estiloH.HeaderEstilo}>

            <Navbar/>
            
        </header>


    )

}

export default Header;