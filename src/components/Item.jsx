import { Link } from "react-router-dom"

const Item = ({ prod }) => {

    return (
        <div className="box-producto">

            <img src={prod.img} alt="" />
            {/* <span>Disponibles: {prod.stock}</span> */}
            <div className="box-producto-descr">
                <div className="box-producto-header">
                    <h3>{prod.title}</h3>
                    <p>${prod.price}</p>
                </div>
                <div className="box-producto-body">
                    <span>{prod.stock ? "Available: " + prod.stock : "Not available"}</span>

                    <Link to={`/category/${prod.type}/${prod.id}`}>
                        <button>More info</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Item