import React, {useState } from 'react'
import '../css/itemDetail.css'
import ItemCount from './ItemCount'

import { useCarrito } from './CustomProvider'

function ItemDetail(props) {

    const [cantidad,setCantidad] = useState(1);

    const valorDelContexto = useCarrito();

    const onAdd = (parametro) => {
        setCantidad(parametro);
        valorDelContexto.agregarProducto(props.producto,parametro);
    }


    return (
        <div className='cardDetalle'>
            <div className='contImg'>
                <img src={props.producto.img} alt="Cubo rubix" />
            </div>

            <div className='separador'></div>

            <div className='contCuerpo'>
                <p className='nombre'>{props.producto.nombre}</p>
                <p className='precio'>$ {props.producto.precio}</p>
                <p className='detalle'>{props.producto.detalle}</p>

                <ItemCount onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemDetail;