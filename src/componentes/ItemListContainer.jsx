import React from "react";
import '../css/itemListContainer.css';
import CardList from "./CardList";

function ItemListContainer(props){
    return(
        <div className="contenedor-item-list">
            <p className="mensaje">
                {props.mensaje}
            </p>

            <CardList/>
        </div>
    );
}

export default ItemListContainer;