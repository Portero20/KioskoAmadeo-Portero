import React from "react";
import CartWidget from "./CartWidget";
import estilosNav from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={estilosNav.navEstilo}>
      <ul>
        <li>
          <a href="#" className="enlaces">
            Productos
          </a>
        </li>
        <li>
          <a href="#" className="enlaces">
            Nosotros
          </a>
        </li>
        <li>
          <a href="#" className="enlaces">
            Contacto
          </a>
        </li>
        <CartWidget />
      </ul>
    </nav>
  );
};

export default Navbar;
