import { useContext } from "react";
import { useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../contexts/CartContext";

const Cart = ({ prod, lote }) => {
    const [prodStock, setProdStock] = useState(lote);
    const cartCTX = useContext(CartContext);
    const setStock = () => {
        const stock = [];
        for (let i = 1; i <= prod.stock; i++) {
            stock.push(i) 
        }
        return stock
    }
    const changeStock = (e)=>{
        setProdStock(e.target.value);
        cartCTX.getTotal();
    }
    const removeProdList = (e)=>{
        cartCTX.removeProd(e.target.value);
        cartCTX.checkQuantity();
    }
    return (
        <div className="cart-product-box">
            <img src={prod.img} alt="" />
            <div>
                <Link to={`/category/${prod.type}/${prod.id}`}><h3>{prod.title}</h3></Link>
                <p>$ {prod.price * prodStock}</p>
                <select name="" id="" value={prodStock} onChange={changeStock}>
                    {setStock().map(elem => elem === lote ? <option value={elem} selected key={elem}>{elem}</option> : <option value={elem} key={elem}>{elem}</option>)}
                </select>
            </div>
            <div className="cart-product-box-btn">
                <button value={prod.id} onClick={removeProdList}>Remove</button>
            </div>
        </div>
    )
}

export default Cart