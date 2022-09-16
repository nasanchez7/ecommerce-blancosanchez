import CarritoContext from "../context/CarritoContext";
import { useEffect, useState, useContext } from "react";

const Cart = () => {

    //Context
    const carrito = useContext(CarritoContext)

    let total = 0;

    useEffect(()=>{
    })

    return(
        <div className="carritoContainer">
            <h2>Tu carrito de compras</h2>
            <div className="carrito">
                {carrito.carrito.map((item, index) => {
                    return(
                        <div className="card" key={index}>
                            <div className="cardImage">
                                <img src={item.thumbnail} alt={item.title}/>
                            </div>
                            <div className="cardPrice">
                                <div className="cardFavourite">
                                    <h2> {item.title} </h2>
                                    <i className='bx bxs-trash' onClick={()=>{
                                            carrito.removeItem(index, item)
                                    }}></i>
                                </div>
                                <h3> $ {item.price} </h3>
                                <h4> Cantidad: {item.cantidad} </h4>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="btnCompra">
                {carrito.carrito.length > 0 ? <button>Finalizar compra</button> : ""}
            </div>
        </div>
    )
}

export default Cart;
