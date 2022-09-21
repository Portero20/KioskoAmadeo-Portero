import React from "react";
import navBar from "./navbar.module.scss";
import logoPng from '../../img/logo_small.png';
import "./burger.css";
import { Link } from "react-router-dom";
import CartWidget from "../cartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark navBar">
      <div className="container-fluid d-flex">
        <Link to="/" className="navbar-brand">

          <img className={navBar.logoKiosko} src={logoPng} alt="" style={{height:'40px'}}/>

        </Link>
        <button className="navbar-toggler d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav d-flex justify-content-end w-100 navigator">
            <Link to="/tienda" className="nav-link text-light fw-bold link">Tienda</Link>
            <Link to="/category/Bebidas" className="nav-link text-light fw-bold link">Bebidas</Link>
            <Link to="/category/Golosinas" className="nav-link text-light fw-bold link">Golosinas</Link>
            <Link to="/category/Varios" className="nav-link text-light fw-bold link">Varios</Link>
            
          </div>

          
          <Link to="/cart">
          
            <CartWidget/>

          </Link>
          

         

        
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
