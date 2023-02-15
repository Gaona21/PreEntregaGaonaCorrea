import React, { createContext, useContext, useEffect, useState } from "react";
import Notiflix from 'notiflix';

const contexto = createContext();
const Provider = contexto.Provider;

export const useCarrito = () => {
    const valorDelContexto = useContext(contexto);
    return valorDelContexto;
}

function CustomProvider({ children }) {

    Notiflix.Notify.init({
        width: '300px',
        position: 'right-bottom',
        closeButton: false,
        });

    const [carrito, setCarrito] = useState([]);
    const [totalProducto, setTotalProducto] = useState(0);
    const [preciototal, setPrecioTotal] = useState(0);

    useEffect(() => {
        if (localStorage.getItem("carrito")) {
            setCarrito(JSON.parse(localStorage.getItem("carrito")))
        }
    }, []);

    useEffect(() => {

        const copiaCarrito = carrito.slice(0);
        let acumuladotCantida = 0;
        let acumuladotPrecio = 0;

        copiaCarrito.forEach((producto) => {
            acumuladotCantida += producto.cantidad;
            acumuladotPrecio += producto.precio * producto.cantidad;
        });

        setTotalProducto(acumuladotCantida);
        setPrecioTotal(acumuladotPrecio);

        localStorage.setItem("carrito", JSON.stringify(copiaCarrito));

    }, [carrito]);

    const agregarProducto = (producto, cantidad) => {
        const copiaCarrito = carrito.slice(0);

        if (estaEnCarrito(producto.id)) {

            copiaCarrito.find((elemento) => elemento.id === producto.id).cantidad += cantidad;

        } else {

            copiaCarrito.push({ ...producto, cantidad: cantidad });

        }

        setCarrito(copiaCarrito);
        Notiflix.Notify.success('Se agrego al carrito ' + cantidad + " " + producto.nombre);
    }

    const eliminarProducto = (id) => {
        const copiaCarrito = carrito.slice(0);

        const resultado = copiaCarrito.filter(elemento => elemento.id != id);

        setCarrito(resultado);
        Notiflix.Notify.warning('Se elimino el producto del carrito');

    }

    const vaciarCarrito = () => {
        Notiflix.Confirm.show(
            'Atención',
            'Queres vaciar el carrito?',
            'Si',
            'No',
            function okCb() {
                setCarrito([]);
                Notiflix.Notify.success("Se eliminaron todos los productos del carrito.");
            }
        );

    }

    const estaEnCarrito = (productoId) => {
        return carrito.find((producto) =>
            producto.id === productoId
        );
    }

    const valorDelContexto = {
        carrito: carrito,
        totalProducto: totalProducto,
        preciototal: preciototal,
        setCarrito: setCarrito,
        setTotalProducto: setTotalProducto,
        agregarProducto: agregarProducto,
        eliminarProducto: eliminarProducto,
        vaciarCarrito: vaciarCarrito
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    );
}

export default CustomProvider;