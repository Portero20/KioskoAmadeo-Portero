import Navbar from '../nav/Navbar';
import estiloH from './header.module.css' //trabajamos con modulos, le pone un id a la clase automaticamente, con modulos evitamos que se pise

const Header = () =>{

    return(

        <header className= {estiloH.HeaderEstilo}>

            <Navbar/>
            
        </header>


    )

}

export default Header;