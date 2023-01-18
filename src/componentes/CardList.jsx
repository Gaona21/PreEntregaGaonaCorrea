import React from "react";
import Card from "./Card";
import '../css/cardList.css';

import { useState,useEffect } from "react";

function CardList(){

    const [load,setLoad]=useState(false);
    const [productos,setProductos] = useState([]);

    useEffect(()=>{
        const pedido = fetch("/src/productos.json");

        pedido.then((res)=>{
            const productos = res.json();
            return productos;
        })
        .then((productos)=>{
            console.log(productos);
            setLoad(true);
            setProductos(productos);
        })

        .catch((error)=>{
            console.log(error);
        })

    },[]);

    return(
        <div className="cardList">
            {productos.map((producto)=>{
                return(
                    <Card
                    url={producto.img}
                    nombre={producto.nombre}
                    precio={producto.precio}
                    />
                );
            })}
        </div>
    );
}

export default CardList;