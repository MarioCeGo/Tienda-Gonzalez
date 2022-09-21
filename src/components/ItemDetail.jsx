import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import {CartContext} from "../contexts/CartContext";
import ItemCount from "./ItemCount"

const ItemDetail = ({prod}) => {
    const [lote, onAdd] = useState(1);
    const cartCTX = useContext(CartContext)
    

    return (
        <div className="container-producto-detalle">
            <div>
                <h2>{prod.title}</h2>
                {/* {console.log(prod)} */}
                <img src={prod.img} alt="" />
            </div>
            <div className="container-producto-detalle-info">
                <span>{prod.color}</span>
                {/* {console.log(typeof(prod.color))} */}
                {prod.color.map((elem) => {
                    <p>{elem}</p>
                    
                })}
                
                {/* {prod.storage.map((elem)=>{
                    typeof(elem) == "String" ? <span>{elem}</span> : console.log(elem)
                })} */}
                {/* <span>{prod.storage}</span> */}
                
                <span className="price">${prod.price}</span>
                
                <span>{prod.stock ? "Unidades: " + prod.stock : "No hay stock disponible"}</span>
                <ItemCount stock={prod.stock} lote={lote} onAdd={onAdd} />
                <div>

                    <Link to={"/cart"}><button className="btn-buy">Comprar ahora</button></Link>
                    <button className="btn-buy btn-buy-secundary" onClick={() => {
                        if (prod.stock) {
                            cartCTX.addItem({prod, lote})
                            
                        }else{
                            alert("No hay nada que agregar")
                        }

                    }}>Agregar al carrito</button>
                </div>
            </div>

        </div>
    )
}

export default ItemDetail