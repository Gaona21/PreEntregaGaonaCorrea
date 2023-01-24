import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

import React from "react";
import ItemList from "./ItemList";

import '../css/cardList.css';

function CardList(){

    const [load,setLoad] = useState(false);
    const [productos,setProductos] = useState([]);
    const props = useParams();

    useEffect(()=>{
        const pedido = fetch("/src/productos.json");

        pedido.then((res)=>{
            const productos = res.json();
            return productos;
        })
        .then((productos)=>{
            setLoad(true);
            setProductos(props.categoria != undefined ? productos.filter(p=>p.categoria == props.categoria) : productos);
        })

        .catch((error)=>{
            console.log(error);
        }) 

    },[props.categoria]);

    return(
        <div className="cardList">
            <ItemList
            listaProducto = { productos }
            />
        </div>
    );
}

export default CardList;