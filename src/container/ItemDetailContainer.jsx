import ItemDetail from "../components/ItemDetail"
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { getFirestore, getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = ({ setCarrito, carrito }) => {

    const [item, setItem] = useState([]);
    const { productoID } = useParams();

    useEffect(() => {
        setTimeout(() => {
            const db = getFirestore();
            const id = productoID;
            const itemR = doc(db, 'items', id);
            getDoc(itemR).then((snapshot) => {
                setItem(snapshot.data());
                console.log(snapshot.data())
            })
        }, 2000);
    }, [productoID]);

    return (
        <div>
            {item.length === 0 ? <Loading /> : <ItemDetail prod={item} setCarrito={setCarrito} carrito={carrito} />}
        </div>
    );
}

export default ItemDetailContainer