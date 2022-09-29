import { Link } from "react-router-dom";

const ItemCount = ({stock, setContador, contador,  onAdd}) => {

    const aumentarContador = () => {
        if(contador >= stock){
            setContador(contador = stock)
        }else{
            setContador(contador + 1)
        }
        if(stock <= 0){
            stock = 0
        }
    }   

    const restarContador = () => {
        if(contador <= 1){
            setContador(contador = 1)
        }else{
            setContador(contador - 1)
        }
        if(stock === 0){
            setContador(contador = stock)
        }
        if(stock <= 0){
            stock = 0
        }
    }

    return (
        <div className="itemCount">
            <h4>Stock disponible: {stock}</h4>
            <div className="count">
                <div className="count-uno">
                    <button className="button1" onClick={restarContador}>-</button>
                    <h3>{contador}</h3>
                    <button className="button1" onClick={aumentarContador}>+</button>
                </div>
                <Link to={`/cart`}><button className="buttonAdd" onClick={onAdd}>Comprar ahora</button></Link>
            </div>
        </div>
    )
}

export default ItemCount;