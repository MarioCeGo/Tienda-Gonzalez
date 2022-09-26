import { CartContext } from "../contexts/CartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const cartCTX = useContext(CartContext);
    return (
        <div className="container-cart-nav">
            <Link to={'/cart'}><img src="/img/cart.png" alt="cart.png" /></Link>
            <span>{cartCTX.cart.length > 0 ? cartCTX.quantity : ""}</span>
        </div>)
}

export default CartWidget