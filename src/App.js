import './App.css';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
    const [carrito, setCarrito] = useState([]);
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
            <BrowserRouter>
                <NavBar carrito={carrito} />
                <Routes>
                    <Route path='/' element={<ItemListContainer prods={prods} />} />
                    <Route path='/category/mac' element={<ItemListContainer prods={mac} />} />
                    <Route path='/category/iphone' element={<ItemListContainer prods={iphone} />} />
                    <Route path='/category/:type/:productoID' element={<ItemDetailContainer setCarrito={setCarrito} carrito={carrito} />} />
                </Routes>
            </BrowserRouter>
            <header className="App-header">
            </header>
        </div>
    );
}

export default App;
