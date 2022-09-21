import ItemDetail from "../components/ItemDetail"
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const ItemDetailContainer = ({setCarrito, carrito}) => {

    const [item, setItem] = useState([]);
    const { type, productoID } = useParams();

    const getItem = async () => {
        const resp = await fetch(`https://631c95741b470e0e1205982c.mockapi.io/producto/1/${type}/${productoID}`);
        const data = await resp.json();
        setItem(data);
    }

    useEffect(() => {
        setTimeout(() => {
            getItem();
        }, 2000);
    }, []);

    return (
        <div>
            {item.length == 0 ? <Loading/> : <ItemDetail prod={item} setCarrito={setCarrito} carrito={carrito}/>}
        </div>
    );
}

export default ItemDetailContainer