

import React from "react";
import { useState } from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = ({ prod, lote }) => {
        let aux = true;
        if(cart.length === 0){
            setCart([...cart, { prod, lote }]);
        }else{
            cart.forEach((product) => {
                if (product.prod.type.toUpperCase() === prod.type.toUpperCase() && product.prod.id === prod.id && aux) {
                    product.lote += lote;
                    aux = false;
                }
                
            })
            if(aux){
                setCart([...cart, { prod, lote }]);
            }
            console.log(cart)
        }
        
        
    }

    const clearCart = () => {
        setCart([]);
    }
    return (
        <CartContext.Provider value={{ cart, addItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }