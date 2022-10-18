import { Link } from "react-router-dom"

import CartWidget from "./CartWidget"


const NavBar = () => {

    return (
        <div className="container-nav">
            <nav className="nav-principal">
                <Link to={"/"}><img src="/img/apple_logo.png" alt="" className="nav-logo" /></Link>
                <div className="nav-options">
                    <Link to={`/category/iphone`}>iPhone</Link>
                    <Link to={`/category/mac`}>MacBook</Link>
                    <Link to={`/category/watch`}>Watch</Link>
                </div>
                <CartWidget />
            </nav>
        </div>
    )
}

export default NavBar