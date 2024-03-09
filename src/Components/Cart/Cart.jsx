import React, { useContext, useState, useEffect } from "react";
import { cartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../cartItem/cartItem";
import Loader from "../Loader/Loader";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(cartContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true); // Muestra el loader al inicio
        
        setTimeout(() => {
            setLoading(false); // Oculta el loader después de un tiempo de espera simulado
        }, 2000);
    }, []);

    if (loading) {
        return <Loader />; // Si se está cargando, muestra el loader
    }

    if (totalQuantity === 0) {
        return (
            <div className="d-flex justify-content-center align-items-center flex-column vh-100">
                <div className="text-center">
                    <h2>NO TIENES PRODUCTOS AGREGADOS</h2>
                    <Link to="/" className="btn btn-primary mt-3">Ver productos</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    {cart.map((p) => (
                        <CartItem key={p.id} {...p} />
                    ))}
                    <div>
                        <span>Total de productos en el carrito: {totalQuantity}</span>
                    </div>
                    <h3 className="mt-3">Total: ${total}</h3>
                    <div className="d-flex justify-content-center">
                        <div>
                            <button className="btn btn-danger me-3" onClick={() => clearCart()}>Remover todo</button>
                            <Link className="btn btn-primary" to="/checkout">Finalizar compra</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-3">
                <div className="col-md-8 text-center">
                    <Link to="/">Ver más productos</Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
