import { useEffect, useState } from "react";

const ItemCount = ({stock, initial,  onAdd}) => {

    const [contador, setContador] = useState(initial);

    function onAdd(){
        if(contador > stock || contador < initial){
            console.log("No hay stock disponible");
        }else{
            console.log("Usted agrego " + contador + " productos al carrito");
        }
    }

    return (
        <div className="itemCount">
            <h2>Big CheeseBurger</h2>
            <div className="count">
                <button className="button1" onClick={() => setContador(contador - 1)}>-</button>
                <h3>{contador}</h3>
                <button className="button1" onClick={() => setContador(contador + 1)}>+</button>
            </div>
            <button className="buttonAdd" onClick={onAdd} >Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;