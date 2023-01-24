import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import React from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [load, setLoad] = useState(false);
  const [productos, setProductos] = useState([]);
  const params = useParams();

  useEffect(() => {
    const pedido = fetch("/src/productos.json");

    pedido.then((res) => {
      const productos = res.json();
      return productos;
    })
      .then((productos) => {
        setLoad(true);
        setProductos(productos.filter(p => p.id == params.id));
      })

      .catch((error) => {
        console.log(error);
      })

  }, []);

  return (
    <div className="cardList">
      <ItemDetail
        producto = {productos}
      />
    </div>
  );
}

export default ItemDetailContainer