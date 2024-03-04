import React, { createContext, useState, useEffect } from "react";

export const cartContext = createContext({
    cart: [],
    totalQuantity: 0,
    total: 0,
});

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    // Calcula la cantidad total de productos en el carrito
    useEffect(() => {
        const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
        setTotalQuantity(totalQuantity);
    }, [cart]);

    // Calcula el precio total de todos los productos en el carrito
    useEffect(() => {
        const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
const formattedPrice = totalPrice.toLocaleString(); // Formatear el precio total con separadores de miles
setTotal(formattedPrice);
    }, [cart]); 

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
        } else {
            console.error('El producto ya fue agregado');
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId); 
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    return (
        <cartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>
            {children}
        </cartContext.Provider>
    );
};

export default CartProvider;
