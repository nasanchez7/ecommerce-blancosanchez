import React, { useState } from 'react'
import CarritoContext from './CarritoContext';

const CarritoProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalPagar, setTotalPagar] = useState(0);

    const addItem = (item, cantidad) => {
        let itemRepetido = carrito.findIndex(x => x.id == item.id);
        if(itemRepetido > -1){
            carrito.splice(itemRepetido, 1)
            item.cantidad = cantidad;
            setCarrito([...carrito, item]);
        }else{
            item.cantidad = cantidad;
            setCarrito([...carrito, item]);
        }
        setTotal(total + item.cantidad);
        setTotalPagar(totalPagar + (item.price * item.cantidad));
    }

    const removeItem = (itemId, item) => {
        item.cantidad > 1 ? item.cantidad = item.cantidad - 1 : carrito.splice(itemId, 1);
        setCarrito([...carrito])
        setTotal(total - 1)
        setTotalPagar(totalPagar - item.price);
    }

    const clearCart = () => {
        setCarrito([]);
        setTotal(0)
        setTotalPagar(0);
    }

    return(
        <CarritoContext.Provider value={{carrito, addItem, removeItem, clearCart, total, totalPagar}}>
            {children}
        </CarritoContext.Provider>
    )
}


export default CarritoProvider;