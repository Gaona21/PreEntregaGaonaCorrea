import React from 'react'
import { useState } from 'react';
import '../css/itemCount.css';

function ItemCount({ onAdd }) {

    const [contador, serContador] = useState(1);

    const handleSumar = () => {
        serContador(contador + 1);
    }

    const handleRestar = () => {
        if (contador > 1) {
            serContador(contador - 1);
        }

    }

    const handleConfirmar = () => {
        onAdd(contador);
    }

    return (
        <div className='contPadre'>
            <div className='contCount'>
                <button className='btnMas' onClick={handleSumar}>+</button>
                <p className='cantidad'> {contador} </p>
                <button className='btnMenos' onClick={handleRestar}>-</button>
            </div>
            <div className='contConfirmar'>
                <button className='btnConfirmar' onClick={handleConfirmar}>Agregar al carrito</button>
            </div>
            
        </div>
    );
}

export default ItemCount