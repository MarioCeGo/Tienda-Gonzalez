import './App.css';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContainer from './container/CartContainer';
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { CartProvider } from './contexts/CartContext';
import Loading from './components/Loading';
import CheckoutContainer from './container/CheckoutContainer';


function App() {

    const [prods, setProds] = useState([]);
    const [mac, setMac] = useState([]);
    const [iphone, setIphone] = useState([]);
    const [watch, setWatch] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const db = getFirestore();
            const items = collection(db, 'items');
            getDocs(items).then((snapshot) => {
                const docs = snapshot.docs.map((doc) => ({
                    id: doc.id, ...doc.data()
                }))
                setProds(docs);
                setMac(docs.filter(elem => elem.type === 'mac'));
                setIphone(docs.filter(elem => elem.type === 'phone'));
                setWatch(docs.filter(elem => elem.type === 'watch'));
            })
        }, 2000);
    }, []);


    return (
        <div className="App">
            <CartProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<ItemListContainer prods={prods} />} />
                        <Route path='/category/mac' element={<ItemListContainer prods={mac} />} />
                        <Route path='/category/iphone' element={<ItemListContainer prods={iphone} />} />
                        <Route path='/category/watch' element={<ItemListContainer prods={watch} />} />
                        <Route path='/category/:type/:productID' element={<ItemDetailContainer />} />
                        <Route path='/cart' element={<CartContainer />} />
                        <Route path='/checkout' element={<CheckoutContainer/>}/>
                    </Routes>
                </BrowserRouter>
            </CartProvider>

            <header className="App-header">
                {prods.length === 0 ? <Loading/> : ""}
            </header>
        </div>

    );
}

export default App;
