import Item from "./Item"

const ItemList = ({prods})=>{
    return(
        <div className="container-productos">
            {prods.map((prod)=>{
                return <Item prod={prod} key={prod.title}/>
            })}
        </div>
    )
}

export default ItemList