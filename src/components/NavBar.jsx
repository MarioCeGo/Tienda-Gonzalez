import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../contexts/CartContext"


const NavBar = () => {
    const cartCTX = useContext(CartContext)

    return (
        <div className="container-nav">
            <nav className="nav-principal">
                <Link to={"/"}><img src="/img/apple_logo.png" alt="" /></Link>
                <Link to={`/category/iphone`}>iPhone</Link>
                <Link to={`/category/mac`}>MacBook</Link>
                <div className="container-cart">
                    <img src="/img/cart.png" alt="cart.png" />
                    <span>{cartCTX.cart.length>0 ? cartCTX.cart.length : "" }</span>
                </div>
            </nav>
        </div>
    )
}

export default NavBar