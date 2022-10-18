

import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [qty, setQty] = useState(0)
    const [total, setTotal] = useState(0)

    const addItem = (prod) => {
        if(isInCart(prod.id)){
            const aux = [...cart];
            const prodFound = aux.find(elem => elem.id === prod.id);
            prodFound.qty += prod.qty;
            prodFound.price = (prodFound.price + prod.price);
            setCart(aux);
        }else{
            setCart([...cart, prod])
        }        
    }
    
    const totalQty = () =>{
        let aux = 0;
        cart.forEach((elem)=>{
            aux += elem.qty
        })
        setQty(aux);
    }

    const removeItem = (id) => {
        cart.splice(cart.indexOf(cart.find(elem => elem.id === id)), 1);
        getTotal();
        totalQty();
    }
    const isInCart = (id) => {
        return cart.some(elem => elem.id === id)
    }

    const clearCart = () => {
        setCart([]);
    }
    const getTotal = () => {
        let aux = 0;
        cart.forEach((elem) => {
            aux += (elem.price * elem.qty)
        })
        setTotal(aux);
    }

    useEffect(()=>{
        totalQty();
    },[cart])

    return (
        <CartContext.Provider value={{ cart, qty, total, addItem, clearCart, setTotal, getTotal, removeItem, totalQty }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }