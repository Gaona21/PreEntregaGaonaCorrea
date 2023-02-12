import React from "react";
import '../css/cartWidget.css';
import { useCarrito } from './CustomProvider';

function CartWidget(){

    const valorDelContexto = useCarrito();

    return(
        <div className="contenedor-icono-carrito">
            <img className="icono-carrito" src={require("../img/icono-carrito.png")} alt="Carrito de compra" />
            <div className="cant-producto-carrito"><p>{valorDelContexto.totalProducto}</p></div>
        </div>
    );
}

export default CartWidget;
