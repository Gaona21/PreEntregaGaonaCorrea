import React from 'react'
import '../css/itemDetail.css'

function ItemDetail(props) {
    return (
        props.producto.map((producto) => {
            return (
                <div className='cardDetalle'>
                    <div className='contImg'>
                        <img src={producto.img} alt="Cubo rubix" />
                    </div>

                    <div className='separador'></div>

                    <div className='contCuerpo'>
                        <p className='nombre'>{producto.nombre}</p>
                        <p className='precio'>{producto.precio}</p>
                        <p className='detalle'>{producto.detalle}</p>
                        <button className='btnComprar'>Comprar</button>
                    </div>
                </div>
            )
        })
    )
}

export default ItemDetail;