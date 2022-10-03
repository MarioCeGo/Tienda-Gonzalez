import ItemDetail from "../components/ItemDetail"
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { getFirestore, getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const { productID } = useParams();

    useEffect(() => {
        setTimeout(() => {
            const db = getFirestore();
            const id = productID;
            const itemR = doc(db, 'items', id);
            getDoc(itemR).then((snapshot) => {
                setItem(snapshot.data());
            })
        }, 2000);
    }, [productID]);

    return (
        <div>
            {item.length === 0 ? <Loading /> : <ItemDetail prod={item} idItem={productID} />}
        </div>
    );
}

export default ItemDetailContainer