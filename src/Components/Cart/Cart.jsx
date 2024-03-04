import React, { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../cartItem/cartItem";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(cartContext);

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
                            <Link className="btn btn-primary" to="/checkout">Checkout</Link>
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
