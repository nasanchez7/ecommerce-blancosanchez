import React, { useState } from 'react'
import CarritoContext from './CarritoContext';

const CarritoProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    const addItem = (item, cantidad) => {
        item.cantidad = cantidad;
        setCarrito([...carrito, item]);
        console.log(item);
    }

    const removeItem = (itemId, item) => {
        item.cantidad > 1 ? item.cantidad = item.cantidad - 1 : carrito.splice(itemId, 1);
        setCarrito([...carrito])
    }

    const clearCart = () => {
        setCarrito([]);
    }

    return(
        <CarritoContext.Provider value={{carrito, addItem, removeItem, clearCart}}>
            {children}
        </CarritoContext.Provider>
    )
}


export default CarritoProvider;