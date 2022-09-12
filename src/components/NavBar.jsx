import { Link } from "react-router-dom"

const NavBar = ({carrito}) => {
    return (
        <div className="container-nav">
            <nav className="nav-principal">
                <Link to={"/"}><img src="/img/apple_logo.png" alt="" /></Link>
                <Link to={`/category/iphone`}>iPhone</Link>
                <Link to={`/category/mac`}>MacBook</Link>
                <div className="container-cart">
                    <img src="/img/cart.png" alt="cart.png" />
                    <span>{carrito.length>0 ? carrito.length : "" }</span>
                </div>
            </nav>
        </div>
    )
}

export default NavBar