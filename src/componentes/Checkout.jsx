import React, { useState } from "react";
import '../css/checkout.css'
import { useCarrito } from "./CustomProvider";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Checkout() {

    const valordelProvider = useCarrito();

    const coleccionVentas = collection(db, "ventas");

    const navigate = useNavigate();

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [direccion, setdireccion] = useState("");

    const handleChangeNombre = (event) => {
        setNombre(event.target.value);
    }
    const handleChangeApellido = (event) => {
        setApellido(event.target.value);
    }
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleChangeDireccion = (event) => {
        setdireccion(event.target.value);
    }

    const finalizarCompra = (carrito) => {

        const orden = {
            usuario: {
                nombre: nombre,
                apellido: apellido,
                email: email,
                direccion: direccion
            },
            carrito
        }

        const pedido = addDoc(coleccionVentas, orden);
        valordelProvider.vaciarCarrito();
        navigate("/");
    }

    return (
        <div className="contCheout">

            <div className="contForm">
                <div className="tiket">
                    <p className="precioTotal">Mi pedido: </p>
                    {valordelProvider.carrito.map((producto) => {
                        return (
                            <div className="contenedorp" key={producto.id}>

                                <div className="Cantidad">
                                    <p> {producto.cantidad} </p>
                                </div>

                                <div className="Nombre">
                                    <p> {producto.nombre} </p>
                                </div>

                                <div className="Precio">
                                    <p>   $ {producto.precio} </p>
                                </div>
                            </div>
                        )
                    })}
                    <p className="precioTotal">Total: $ {valordelProvider.preciototal}</p>
                </div>
                <div className="form">
                    <h1>¡Estas a un "click" para que sea tuyo!</h1>
                    <div className="contInputs ">
                        <label htmlFor="nombre">Nombre: </label>
                        <input onChange={handleChangeNombre} type="text" id="nombre" name="nombre" required />
                    </div>
                    <div className="contInputs ">
                        <label htmlFor="apellido">Apellido: </label>
                        <input onChange={handleChangeApellido} type="text" id="apellido" name="apellido" required />
                    </div>
                    <div className="contInputs ">
                        <label htmlFor="direccion">Direccion: </label>
                        <input onChange={handleChangeDireccion} type="text" id="direccion" name="direccion" required />
                    </div>
                    <div className="contInputs ">
                        <label htmlFor="correo">Correo: </label>
                        <input onChange={handleChangeEmail} type="email" id="correo" name="correo" required />
                    </div>
                    <div className="btnFinalizarCompra ">
                        <button type="submit" onClick={() => {
                            finalizarCompra(valordelProvider.carrito);
                        }} className="btnFinalizarCompra">Finalizar compra
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Checkout;