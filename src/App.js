import './App.css';
import NavBar from './components/NavBar';
import { useEffect, useState, useContext } from 'react';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContainer from './container/CartContainer';

import {CartProvider} from './contexts/CartContext';


function App() {
    
    const [prods, setProds] = useState([]);
    const [mac, setMac] = useState([]);
    const [iphone, setIphone] = useState([]);

    const setProductos = async () => {
        const resp = await fetch(`https://631c95741b470e0e1205982c.mockapi.io/producto/1/iphone`);
        const data = await resp.json();
        setIphone(data);

        const resp2 = await fetch(`https://631c95741b470e0e1205982c.mockapi.io/producto/1/mac`);
        const data2 = await resp2.json();
        setMac(data2);

        setProds([...data, ...data2]);
    }

    useEffect(() => {
        setTimeout(() => {

            setProductos();
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
                        <Route path='/category/:type/:productoID' element={<ItemDetailContainer />} />
                        <Route path='/cart' element={<CartContainer />} />
                    </Routes>
                </BrowserRouter>
            </CartProvider>

            <header className="App-header">
            </header>
        </div>

    );
}

export default App;
