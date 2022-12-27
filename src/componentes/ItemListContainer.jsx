import React from "react";
import '../css/itemListContainer.css'

function ItemListContainer(props){
    return(
        <div className="contenedor-item-list">
            <p className="mensaje">
                {props.mensaje}
            </p>
        </div>
    );
}

export default ItemListContainer;