import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "../components/Cart";
import { CartContext } from "../contexts/CartContext";

const CartContainer = () => {
    const cartCTX = useContext(CartContext);
    useEffect(() => {
        cartCTX.getTotal()
    }, []);

    return (
        <div className="container-cart">
            <div className="container-cart-status">
                {cartCTX.cart.length === 0 ?  <h2>The cart is empty</h2> : <h2>Your total is $ {cartCTX.total} </h2> }
                
            </div>
            {cartCTX.cart.length === 0 ? <Link to={'/'}><button className="btn-principal">go shopping</button></Link> : cartCTX.cart.map((elem) => {
                return <Cart prod={elem.prod} key={elem.prod.title} lote={elem.lote} />
            })}
        </div>
    )
}

export default CartContainer