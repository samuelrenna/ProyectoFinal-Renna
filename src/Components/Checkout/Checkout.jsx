import React, { useContext, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'; // Importa Link para la navegación
import { cartContext } from '../../context/CartContext';
import { db } from '../../services/fireBase/config';
import CustomLoader from '../Loader/Loader'; // Importa el componente Loader

const Checkout = () => {
    const { cart, clearCart, total } = useContext(cartContext);
    const [pedidoId, setPedidoId] = useState("");
    const [compraRealizada, setCompraRealizada] = useState(false);
    const [cargando, setCargando] = useState(false); // Estado para controlar si se está cargando

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const pedido = {
            cliente: data,
            productos: cart,
            total: total
        };

        try {
            setCargando(true); // Indica que se está cargando
            const pedidoRef = collection(db, "pedidos");
            const docRef = await addDoc(pedidoRef, pedido);
            console.log("Pedido registrado con ID: ", docRef.id);
            setPedidoId(docRef.id);
            clearCart();
            setCompraRealizada(true);
        } catch (error) {
            console.error("Error al registrar el pedido: ", error);
        } finally {
            setCargando(false); // Finaliza la carga
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            {!cargando && (
                                <>
                                    {!compraRealizada && (
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            {/* Formulario de compra */}
                                            <div className="mb-3">
                                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                                <input {...register("nombre", { required: true })} type="text" className="form-control" id="nombre" />
                                                {errors.nombre && <span className="text-danger">Por favor ingresa tu nombre.</span>}
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label">Email</label>
                                                <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} type="email" className="form-control" id="email" />
                                                {errors.email && <span className="text-danger">Por favor ingresa un email válido.</span>}
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="telefono" className="form-label">Teléfono</label>
                                                <input {...register("telefono", { required: true, pattern: /^[0-9]+$/ })} type="tel" className="form-control" id="telefono" />
                                                {errors.telefono && <span className="text-danger">Por favor ingresa un número de teléfono válido.</span>}
                                            </div>

                                            <button type="submit" className="btn btn-primary">Comprar</button>
                                        </form>
                                    )}

                                    {compraRealizada && (
                                        <div>
                                            <h2 className="text-center">¡Gracias por tu compra!</h2>
                                            <p className="text-center">Tu número de pedido es: {pedidoId}</p>
                                            <div className="row justify-content-center mt-3">
                                                <div className="col-md-8 text-center">
                                                    <Link to="/">Ver más productos</Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}

                            {cargando && (
                                <CustomLoader/> // Aquí se renderiza el componente Loader
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
