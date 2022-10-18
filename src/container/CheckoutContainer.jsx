import FormBuyer from "../Components/FormBuyer"
import { useState} from "react"
import { useContext } from "react"
import { CartContext } from "../Contexts/CartContext"
import Cart from "../Components/Cart"
import { getFirestore, collection, addDoc} from "firebase/firestore"
import OrderDetail from "../Components/OrderDetail"


const CheckoutContainer = () => {
    const cartCTX = useContext(CartContext);
    const [idOrder, setIdOrder] = useState(null);

    const [form, setForm] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: null
    })
    const submitOrder = (e) => {
        e.preventDefault();
        const date = new Date()
        const db = getFirestore();
        const items = [...cartCTX.cart, date, cartCTX.total]
        const order = { buyer: form, items: items };
        const orderCollection = collection(db, 'order');
        addDoc(orderCollection, order).then(snapshot => setIdOrder(snapshot.id))
    }
    return (
        <div className="container-checkout">
            <form className="form-order" onSubmit={submitOrder}>
                <FormBuyer form={form} setForm={setForm} />
                <button>Buy</button>
            </form>
            <div className="container-checkout-items">
                {cartCTX.cart.map((elem) => {
                    return <Cart prod={elem} key={elem.title} className={"cart-product-box-checkout"} />
                })}
            </div>
            {idOrder === null ? "":<OrderDetail idOrder={idOrder}/>}
        </div>
    )
}

export default CheckoutContainer