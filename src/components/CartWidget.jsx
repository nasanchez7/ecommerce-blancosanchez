import React, { useContext } from 'react'
import CarritoContext from "../context/CarritoContext";

const CartWidget = () => {

    const carrito = useContext(CarritoContext);

    return (
        <div className="cartWidget">
            <i className='bx bxs-cart'></i>
            <h4> {carrito.carrito.length} </h4>
        </div>
    )
}

export default CartWidget;