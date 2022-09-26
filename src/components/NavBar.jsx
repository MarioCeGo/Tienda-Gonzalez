import { Link } from "react-router-dom"

import CartWidget from "./CartWidget"


const NavBar = () => {

    return (
        <div className="container-nav">
            <nav className="nav-principal">
                <Link to={"/"}><img src="/img/apple_logo.png" alt="" /></Link>
                <Link to={`/category/iphone`}>iPhone</Link>
                <Link to={`/category/mac`}>MacBook</Link>
                <CartWidget/>
            </nav>
        </div>
    )
}

export default NavBar