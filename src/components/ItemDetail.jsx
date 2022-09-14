import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount"

const ItemDetail = ({ prod, setCarrito, carrito }) => {
    const [lote, onAdd] = useState(1);

    return (
        <div className="container-producto-detalle">
            <div>
                <h2>{prod.title}</h2>
                <img src={prod.img} alt="" />
            </div>
            <div className="container-producto-detalle-info">
                <span>{prod.color}</span>
                {/* {prod.color.forEach((elem) => {
                    <span>elem</span>

                })} */}
                {/* {prod.storage.map((elem)=>{
                    <span>{elem}</span>
                })} */}
                {/* <span>{prod.storage}</span> */}
                <span className="price">${prod.price}</span>
                {/* <span>Unidades: {prod.stock}</span> */}
                <span>{prod.stock ? "Unidades: " + prod.stock : "No hay stock disponible"}</span>
                <ItemCount stock={prod.stock} lote={lote} onAdd={onAdd} />
                <div>

                    <Link to={"/cart"}><button className="btn-buy">Comprar ahora</button></Link>
                    <button className="btn-buy btn-buy-secundary" onClick={() => {
                        if (prod.stock) {
                            console.log(lote)
                            setCarrito([...carrito, prod]);
                            console.log(carrito);
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