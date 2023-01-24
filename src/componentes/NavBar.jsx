import { Link } from "react-router-dom";
import React from "react";
import '../css/navBar.css';
import CartWidget from "./CartWidget";

function NavBar(){
    return(
        <nav className="navBar">
            <div className="contNombreTienda">
                <Link className="nombreTienda" to="/">
                    <span className="tienda">Tienda</span>
                    <span className="rubik">Rubik</span>
                </Link>
            </div>

            <div className="contLinkMenu">
                <ul className="linkMenu"> 
                    <li className="itemMenu"><Link to="/category/cubo">Cubos</Link></li>
                    <li className="itemMenu"><Link to="/category/cuboide">Cuboides</Link></li>
                    <li className="itemMenu"><Link to="/category/accesorio">Accesorios</Link></li>
                </ul>
            </div>

            <div className="contCarrito">
                <Link to={"/carrito"}><CartWidget/></Link>
            </div>
        </nav>
    );
}

export default NavBar;