import estilos from './footer.module.css'  //trabajamos con modulos, le pone un id a la clase automaticamente, con modulos evitamos que se pise

const styles = {

    parrafo:{

        color: 'orange',
        textAlign: 'center',
        marginTop: '30px',
        fontWeight: 'bolder'

    }

}

const Footer = () =>{  //podemos agregar estilos en linea pero hay que utilizar camelCase

    return(

        <footer className= {estilos.contenedorFooter}>

            <h5 style={{textAlign:'center'}}>Portero Daniel Exequiel</h5>


            <p style={styles.parrafo}>Tenemos todos los productos</p>

        </footer>


    )

}

export default Footer;

