import React from "react";
import '../css/cartWidget.css';

function CartWidget(){
    return(
        <div className="contenedor-icono-carrito">
            <img className="icono-carrito" src={require("../img/icono-carrito.png")} alt="Carrito de compra" />
            <div className="cant-producto-carrito">1</div>
        </div>
    );
}

export default CartWidget;
