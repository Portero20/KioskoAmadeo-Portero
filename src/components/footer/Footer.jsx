import Navbar from '../nav/Navbar';
import estilos from './footer.module.css'  //trabajamos con modulos, le pone un id a la clase automaticamente, con modulos evitamos que se pise

const styles = {

    parrafo:{

        color: 'orange',
        textAlign: 'center',
        marginTop: '30px'

    }

}

const Footer = () =>{  //podemos agregar estilos en linea pero hay que utilizar camelCase

    return(

        <footer className= {estilos.contenedorMain}>

            <h5 style={{textAlign:'center'}}>Portero Daniel Exequiel</h5>

            <Navbar/>

            <p style={styles.parrafo}>Tenemos todos los productos</p>

        </footer>


    )

}

export default Footer;