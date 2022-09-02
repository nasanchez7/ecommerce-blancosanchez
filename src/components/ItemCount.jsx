import { useState } from "react";

const ItemCount = ({stock, initial,  onAdd}) => {

    let [contador, setContador] = useState(initial);
    let [stockDisponible, setStock] = useState(stock);

    return (
        <div className="itemCount">
            <h4>Stock disponible: {stock}</h4>
            <div className="count">
                <button className="button1" onClick={() => {
                    if(contador <= initial){
                        setContador(contador = initial)
                    }else{
                        setContador(contador - 1)
                    }
                    if(stockDisponible === 0){
                        setContador(contador = stockDisponible)
                    }
                    if(stockDisponible <= 0){
                        setStock(stockDisponible = 0);
                    }
                }}>-</button>
                <h3>{contador}</h3>
                <button className="button1" onClick={() => {
                    if(contador >= stockDisponible){
                        setContador(contador = stockDisponible)
                    }else{
                        setContador(contador + 1)
                    }
                    if(stockDisponible <= 0){
                        setStock(stockDisponible = 0);
                    }
                }}>+</button>
            </div>
            <button className="buttonAdd" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;