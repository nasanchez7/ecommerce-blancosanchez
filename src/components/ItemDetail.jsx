import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import CarritoContext from "../context/CarritoContext";

const ItemDetail = ({item}) => {

    //Context
    const carrito = useContext(CarritoContext)

    let [contador, setContador] = useState(1);

    const onAdd = () => {
        carrito.addItem(item, contador);
    }

    return(
        <div className="item">
            <div className="itemImg">
                    <img src={item.img} alt={item.title}/>
                </div>
                <div className="itemDetail">
                    <div className="favorite">
                        <i className='bx bx-heart' ></i>
                    </div>
                    <h3 className="title">{item.title} </h3>
                    <h4>{item.description}</h4>
                    <h4 className="price">$ {item.price}</h4>
                    <div id="itemCount">
                        <ItemCount contador={contador} setContador={setContador} stock={item.stock} onAdd={onAdd} />
                    </div>
                </div>
        </div>
    )
}

export default ItemDetail; 