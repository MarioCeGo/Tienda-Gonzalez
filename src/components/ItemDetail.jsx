import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../Contexts/CartContext";
import ItemCount from "./ItemCount"

const ItemDetail = ({ prod, idItem }) => {
    const [lote, onAdd] = useState(1);
    const [priceStge, setPriceStge] = useState(0);
    const [priceRam, setPriceRam] = useState(0);
    const [stge, setStge] = useState(null);
    const [ram, setRam] = useState(null);
    const [color, setColor] = useState(prod.color[0]);
    const [checked, setChecked] = useState(true);
    const cartCTX = useContext(CartContext);

    const addToCart = () => {
        const aux = { ...prod };
        aux.qty = lote;
        aux.id = idItem;
        aux.color = color
        if (prod.type !== 'watch') {
            if (prod.type === 'mac') {
                aux.ram = ram;
                aux.storage = stge;
            } else {
                aux.storage = stge;
            }
        }

        aux.price = (prod.price + priceRam + priceStge);
        cartCTX.addItem(aux);
        cartCTX.totalQty();
    }
    useEffect(() => {
        if (prod.type !== 'watch') {
            if (prod.type === 'mac') {
                setRam(prod.ram[0]);
                setStge(prod.storage[0]);
            } else {
                setStge(prod.storage[0]);
            }
        }
    }, [])

    const priceChange = (e) => {
        if (e.target.name === 'stge') {
            setPriceStge(Number(e.target.value));
            setStge(e.target.id);
        } else {
            setPriceRam(Number(e.target.value));
            setRam(e.target.id);
        }
    }
    const colorProd = (e) => {
        setColor(e.target.id);
        setChecked(!checked)
    }

    return (
        <div className="container-producto-detalle" key={prod.title}>
            <div>
                <h2>{prod.title}</h2>
                <img src={prod.img} alt="" />
            </div>
            <div className="container-producto-detalle-info">

                <div className="container-radios-colors">
                    {prod.color.map((elem) => {
                        return (
                            <div key={elem}>
                                {elem === prod.color[0] ? 
                                
                                <input type="radio" name="color" id={elem.replace(/ , \//g, "")} className="radioHidden" onChange={colorProd} defaultChecked={checked} />
                                :
                                <input type="radio" name="color" id={elem.replace(/ /g, "")} className="radioHidden" onChange={colorProd} />
                                }

                                <label htmlFor={elem.replace(/ /g , "")} ><div className={"color-radio color-radio-" + elem.replace(/ /g, "")}></div></label>
                            </div>
                        )
                    })}
                </div>

                {prod.type === 'watch'
                    ?
                    ''
                    :
                    <div className="container-specs">
                        <h4>STORAGE</h4>
                        {
                            prod.storage.map((stge) => {
                                if (typeof (stge) === 'string') {
                                    return (
                                        <div className="box-specs" key={stge}>
                                            {stge === prod.storage[0]
                                                ?
                                                <input className="radio-specs" type="radio" name="stge" id={stge} value={prod.storage[prod.storage.indexOf(stge) + 1]} onChange={priceChange} defaultChecked={checked}/>
                                                :
                                                <input className="radio-specs" type="radio" name="stge" id={stge} value={prod.storage[prod.storage.indexOf(stge) + 1]} onChange={priceChange} />
                                            }

                                            <label className="selected-specs" htmlFor={stge} ><span>{stge} + {prod.storage[prod.storage.indexOf(stge) + 1]}</span></label>
                                        </div>
                                    )
                                }

                            })
                        }
                    </div>
                }


                {prod.type === 'mac' ?
                    <div className="container-specs">
                        <h4>RAM</h4>
                        {
                            prod.ram.map((ram) => {
                                if (typeof (ram) === 'string') {
                                    return (
                                        <div className="box-specs" key={ram}>
                                            
                                            {ram === prod.ram[0] ?
                                                <input className="radio-specs" type="radio" name="ram" id={ram} value={prod.ram[prod.ram.indexOf(ram) + 1]} onChange={priceChange} defaultChecked={checked} />
                                                :
                                                <input className="radio-specs" type="radio" name="ram" id={ram} value={prod.ram[prod.ram.indexOf(ram) + 1]} onChange={priceChange} />}

                                            <input className="radio-specs" type="radio" name="ram" id={ram} value={prod.ram[prod.ram.indexOf(ram) + 1]} onChange={priceChange} />
                                            <label className="selected-specs" htmlFor={ram} >{ram} + {prod.ram[prod.ram.indexOf(ram) + 1]}</label>
                                        </div>
                                    )
                                }

                            })
                        }
                    </div>
                    : ""
                }


                <span className="price">${(prod.price + priceStge + priceRam) * lote}</span>

                <span>{prod.stock ? "Units: " + prod.stock : "Not available"}</span>

                <ItemCount stock={prod.stock} lote={lote} onAdd={onAdd} />

                {prod.stock === lote 
                    ?
                    <Link to={"/cart"}><button className="btn-buy" onClick={addToCart}>Finish</button></Link>
                    :
                    <div>
                        <Link to={"/cart"}><button className="btn-buy" onClick={(e) => {
                            if (prod.stock) {
                                addToCart(e);
                            } else {
                                alert("No hay nada que agregar")
                            }

                        }}>Buy now</button></Link>
                        <button className="btn-buy btn-buy-secundary" onClick={() => {
                            if (prod.stock) {
                                addToCart();
                            } else {
                                alert("No hay nada que agregar")
                            }

                        }}>Add to cart</button>
                    </div>
                }

            </div>

        </div>
    )
}

export default ItemDetail