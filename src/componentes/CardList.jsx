import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import React from "react";
import ItemList from "./ItemList";
import { db } from "../firebase";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";

import '../css/cardList.css';

function CardList() {

    const [load, setLoad] = useState(false);
    const [productos, setProductos] = useState([]);
    const props = useParams();

    useEffect(() => {
        const productosCollection = collection(db, "productos");
        let filtro;
        if(props.categoria){
             filtro = query(productosCollection,where("categoria","==",props.categoria));
        }else{
             filtro = query(productosCollection);
        }

        const pedidoAFirestore = getDocs(filtro);

        pedidoAFirestore
            .then((respuesta) => {
                const productos = respuesta.docs.map(doc => ({ ...doc.data(), id: doc.id }));

                setLoad(true);
                setProductos(productos);
            })
            .catch((error) => {
                console.log(error);
            })

    }, [props.categoria]);

    return (
        <div className="cardList">
            {load ? null : 'Cargando...'}
            <ItemList
                listaProducto={productos}
            />
        </div>
    );
}

export default CardList;