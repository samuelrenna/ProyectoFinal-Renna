import React, { useContext } from 'react';
import './CartWidget.css';
import { cartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { totalQuantity } = useContext(cartContext);

    // Verificar si totalQuantity es igual a 0 Si totalQuantity es 0, no mostrar el componente
    if (totalQuantity === 0) {
        return null;
    }

    return (
        <div className="cart-container">
            <button className="btn navbar-btn cart-button">
                <i className="bi bi-cart icon-lg"></i>
                <span className="cart-count" style={{ fontSize: '0.9rem' }}>{totalQuantity}</span>
            </button>
        </div>
    );
};

export default CartWidget;
