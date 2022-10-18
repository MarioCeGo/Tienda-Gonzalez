import { useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../Contexts/CartContext";

const Cart = ({ prod, className }) => {
    const cartCTX = useContext(CartContext);
    const removeProdList = (e)=>{
        cartCTX.removeItem(e.target.value);
    }
    return (
        <div className={className}>
            <img src={prod.img} alt="" />
            <div>
                <Link to={`/category/${prod.type}/${prod.id}`}><h3>{prod.title}</h3></Link>
                <p>$ {prod.price * prod.qty}</p>
                <p>Quantity: {prod.qty}</p>
            </div>
            {className=== "cart-product-box-checkout" 
            ? 
            "" 
            : 
            <div className="cart-product-box-btn">
                <button value={prod.id} onClick={removeProdList}>Remove</button>
            </div>}
        </div>
    )
}

export default Cart