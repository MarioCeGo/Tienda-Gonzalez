import { Link } from "react-router-dom"

const Item = ({ prod}) => {

    return (
        <div className="box-producto">
            <h3>{prod.title}</h3>
            <img src={prod.img} alt="" />
            {/* <span>Disponibles: {prod.stock}</span> */}
            <span>{prod.stock ? "Disponibles: " + prod.stock : "No hay stock"}</span>
            <p>${prod.price}</p>
            <Link to={`/category/${prod.type}/${prod.id}`}>
                <button>Más info</button>
            </Link>

        </div>
    )
}

export default Item