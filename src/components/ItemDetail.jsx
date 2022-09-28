import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import ItemCount from "./ItemCount"

const ItemDetail = ({ prod }) => {
    const [lote, onAdd] = useState(1);
    const cartCTX = useContext(CartContext)

    const addToCart = () => {
        cartCTX.addItem({ prod, lote })
        cartCTX.checkQuantity();
    }

    return (
        <div className="container-producto-detalle" key={prod.title}>
            <div>
                <h2>{prod.title}</h2>
                <img src={prod.img} alt="" />
            </div>
            <div className="container-producto-detalle-info">

                {prod.color.map(elem => <p key={elem}>{elem}</p>)}

                {prod.type === 'watch' ? "": prod.storage.map(elem => typeof (elem) === 'string' ? <p key={elem}>{elem}</p> : "")}

                <span className="price">${prod.price * lote}</span>

                <span>{prod.stock ? "Units: " + prod.stock : "Not available"}</span>
                <ItemCount stock={prod.stock} lote={lote} onAdd={onAdd} />
                {prod.stock === lote ?
                    <Link to={"/cart"}><button className="btn-buy" onClick={addToCart}>Finish</button></Link>
                    :
                    <div>
                        <Link to={"/cart"}><button className="btn-buy" onClick={() => {
                            if (prod.stock) {
                                addToCart();
                            } else {
                                alert("No hay nada que agregar")
                            }

                        }}>Buy now</button></Link>
                        <button className="btn-buy btn-buy-secundary" onClick={() => {
                            if (prod.stock) {
                                addToCart();
                            } else {
                                alert("No hay nada que agregar")
                            }

                        }}>Add to cart</button>
                    </div>}

            </div>

        </div>
    )
}

export default ItemDetail