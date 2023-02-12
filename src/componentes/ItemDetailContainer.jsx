import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import React from "react";
import ItemDetail from "./ItemDetail";
import { db } from "../firebase";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";

function ItemDetailContainer() {
  const [load, setLoad] = useState(false);
  const [productos, setProductos] = useState({});
  const params = useParams();

  useEffect(() => {

    const productosCollection = collection(db, "productos");
    const referencia = doc(productosCollection, params.id);
    const pedido = getDoc(referencia);

    pedido
      .then((respuesta) => {
        setProductos({...respuesta.data(), id: respuesta.id});
        setLoad(true);
      })
      .catch((error) => {
        console.log(error);
      })

  }, []);

  return (
    <div className="cardList">
      <ItemDetail
        producto={productos}
      />
    </div>
  );
}

export default ItemDetailContainer