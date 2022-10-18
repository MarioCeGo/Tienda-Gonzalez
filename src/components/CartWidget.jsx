import { CartContext } from "../Contexts/CartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const cartCTX = useContext(CartContext);
    
    return (
        <div>
            <Link to={'/cart'}><img src="/img/cart.png" alt="cart.png" className="nav-btn-cart"/></Link>
            <span>{cartCTX.qty > 0 ? cartCTX.qty : ""}</span>
        </div>)
}

export default CartWidget