import React from "react";
import CartWidget from "./CartWidget";
import "./navbar.module.scss";
import logoPng from '../../img/logo_small.png';
import "./burger.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark navBar">
      <div className="container-fluid d-flex">
        <a className="navbar-brand">

          <img src={logoPng} alt="" style={{height:'40px'}} />

        </a>
        <button className="navbar-toggler d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav d-flex justify-content-end w-100 navigator">
            <a className="nav-link active text-light fw-bold link" aria-current="page" href="#">Bebidas</a>
            <a className="nav-link active text-light fw-bold link" href="#">Golosinas</a>
            <a className="nav-link active text-light fw-bold link" href="#">Variedad</a>
            
          </div>
          <CartWidget/>
          
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
