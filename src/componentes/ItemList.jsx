import React from 'react'
import Card from './Card';

function ItemList(props) {
    return (
        props.listaProducto.map((producto) => {
            return (
                <Card
                    key={producto.id}
                    url={producto.img}
                    nombre={producto.nombre}
                    precio={producto.precio}
                    id={producto.id}
                />
            );
        })
    )
}

export default ItemList