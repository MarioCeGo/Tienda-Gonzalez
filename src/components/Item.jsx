import { Link } from "react-router-dom"

const Item = ({ prod}) => {

    return (
        <div className="box-producto">
            <h3>{prod.title}</h3>
            <img src={prod.img} alt="" />
            {/* <span>Disponibles: {prod.stock}</span> */}
            <span>{prod.stock ? "Available: " + prod.stock : "Not available"}</span>
            <p>${prod.price}</p>
            <Link to={`/category/${prod.type}/${prod.id}`}>
                <button>More info</button>
            </Link>

        </div>
    )
}

export default Item