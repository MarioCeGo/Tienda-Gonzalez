

import React from "react";
import { useState } from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0)

    const addItem = ({ prod, lote }) => {
        let aux = true;
        if (cart.length === 0) {
            setCart([...cart, { prod, lote }]);
            setQuantity(lote)
        } else {
            cart.forEach((product) => {
                if (product.prod.type.toUpperCase() === prod.type.toUpperCase() && product.prod.id === prod.id && aux) {
                    product.lote += lote;
                    aux = false;
                }
            })
            if (aux) {
                setCart([...cart, { prod, lote }]);
            }
            console.log(cart)
        }
    }

    const checkQuantity = () => {
        let aux = 0;
        cart.forEach((elem)=>{
            aux += elem.lote;
        })
        setQuantity(aux);
        // if (quantity) {
        //     setQuantity(0);
        // } else {
        //     cart.forEach((elem) => {
        //         setQuantity(quantity + elem.lote);
        //     })
        // }
        // if (!quantity) {
        //     cart.forEach((elem) => {
        //         setQuantity(quantity + elem.lote);
        //     })
        // }
    }

    const removeItem = (id) => {
        cart.splice(cart.indexOf(cart.find(elem => elem.prod.id === id)), 1);
        getTotal();
    }
    const isInCart = (id) => {
        cart.find(elem => elem.prod.id === id ? true : false );
    }

    const clearCart = () => {
        setCart([]);
    }
    const getTotal = () => {
        let aux = 0;
        cart.forEach((elem) => {
            aux += (elem.prod.price * elem.lote)
        })
        setTotal(aux);
    }
    return (
        <CartContext.Provider value={{ cart, quantity, total, addItem, clearCart, setTotal, getTotal, removeItem, checkQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }