import React from "react";
import '../css/card.css';

function Card(props){
    return(
        <div className="card">
            <div className="contImgProducto">
                <img src={props.url} alt="Cubo rubix" />
            </div>
            <div className="contCuerpoCard">
                <p className="nombreProducto">{props.nombre}</p>
                <p className="precioProducto">{props.precio}</p>
                <button className="btnCard">Comprar</button>
            </div>
        </div>
    );
}

export default Card;