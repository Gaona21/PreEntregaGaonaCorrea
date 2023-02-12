import React from "react";
import '../css/itemListContainer.css';
import CardList from "./CardList";

function ItemListContainer(){
    return(
        
        <div className="contenedor-item-list">
            <p className="mensaje">
                Estos son nuestros productos
            </p>

            <CardList/>
        </div>
    );
}

export default ItemListContainer;