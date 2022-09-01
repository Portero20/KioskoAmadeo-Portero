import React from 'react'
import estilos from "./footer.module.scss"; //trabajamos con modulos, le pone un id a la clase automaticamente, con modulos evitamos que se pise
import './iconos.scss'


const styles = {
  parrafo: {
    color: "orange",
    textAlign: "center",
    marginTop: "30px",
    fontWeight: "bolder",
  },
};

const Footer = () => {
  //podemos agregar estilos en linea pero hay que utilizar camelCase

  return (
    <footer className={estilos.contenedorFooter}>
      <div style={{backgroundColor:'#343a40'}} className="card text-center">
        <div className="card-header text-light">Drugstore Amadeo</div>
        <div className="card-body">
          <h5 className="card-title fw-bolder text-light">
            Hecho por: Exequiel Portero
          </h5>
          <ul className="enla">
              <li><a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
            </ul>
        </div>
        <div className="card-footer text-light">
          &copy; Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
