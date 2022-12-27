import React from "react";
import '../css/navBar.css';
import CartWidget from "./CartWidget";

function NavBar(){
    return(
        <nav className="navBar">
            <div className="contNombreTienda">
                <a className="nombreTienda" href="#">
                    <span className="tienda">Tienda</span>
                    <span className="rubik">Rubik</span>
                </a>
            </div>

            <div className="contLinkMenu">
                <ul className="linkMenu"> 
                    <li className="itemMenu"><a href="#">Cubos</a></li>
                    <li className="itemMenu"><a href="#">Cuboides</a></li>
                    <li className="itemMenu"><a href="#">Accesorios</a></li>
                </ul>
            </div>

            <div className="contCarrito">
                <CartWidget/>
            </div>
        </nav>
    );
}

export default NavBar;