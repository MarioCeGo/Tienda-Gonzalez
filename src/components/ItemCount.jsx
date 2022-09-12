const ItemCount = ({stock, lote, onAdd}) => {
    return (
        <div className="container-btn-count">
            <button className="btn-count" onClick={()=>{
                if(lote > 1){
                    onAdd(lote-1);
                }
            }}>-</button>
            <span>{lote}</span>
            <button className="btn-count" onClick={()=>{
                if(lote < stock){
                    onAdd(lote+1);
                }
            }}>+</button>
        </div>
    )
}

export default ItemCount