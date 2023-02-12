import React from "react";
import { useCarrito } from "./CustomProvider";
import '../css/cart.css'
import { Link } from "react-router-dom";

function Cart() {

    const valordelProvider = useCarrito();

    const listaCarrito = valordelProvider.carrito.slice(0);

    const eliminarUnProducto = (idProducto) => {
        valordelProvider.eliminarProducto(idProducto)
    }

    return (
        <div className="contenedorPadre">
            <h1 className="tituloCarrito">Mi carrito</h1>
            <div className="encabezado">
                <p className="producto">Producto</p>
                <p className="precioUni">Precio</p>
                <p className="cantidadProd">Cantidad</p>
                <button className="btnVaciarCarrito" onClick={valordelProvider.vaciarCarrito}>Eliminar Todo</button>
            </div>
            {listaCarrito.map((producto) => {
                return (
                    <div className="contenedorCardCarrito" key={producto.id}>
                        <div className="ContImg">
                            <img className="imgProdCarrito" src={producto.img} alt="Cubo rubix" />
                        </div>

                        <div className="contNombre">
                            <p>{producto.nombre}</p>
                        </div>

                        <div className="contPrecio">
                            <p>{producto.precio}</p>
                        </div>

                        <div className="contCantidad">
                            <p>Cantidad: {producto.cantidad}</p>
                        </div>

                        <button className="btnEliminar" onClick={() => {
                            eliminarUnProducto(producto.id);
                        }}> <img src="./img/iconos/basura.png" alt="basura" /> </button>

                    </div>
                )
            })}

            <div className="contFinal">
                <p className="precioTotal">Total: $ {valordelProvider.preciototal}</p>

                <Link to={"/checkout"} className={valordelProvider.carrito.length>0?"btnComprar":"btnNone"}> Comprar </Link>
            </div>
        </div>
    );
}

export default Cart;