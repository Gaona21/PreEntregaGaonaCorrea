import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import React from "react";
import ItemDetail from "./ItemDetail";
import { db } from "../firebase";
import { collection, doc, getDoc} from "firebase/firestore";
import Notiflix from 'notiflix';

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

  Notiflix.Loading.init({
    backgroundColor: 'rgba(0,0,0,0.9)',
    svgColor: '#DC3535',
    clickToClose: false,
    });

  return (
    <div className="cardList">
      {load ? Notiflix.Loading.remove() : Notiflix.Loading.dots()}
      <ItemDetail
        producto={productos}
      />
    </div>
  );
}

export default ItemDetailContainer