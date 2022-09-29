import { useContext, useState } from "react";
import CarritoContext from "../context/CarritoContext";
import {addDoc, collection, getFirestore} from "firebase/firestore";

const Form = () => {

    const carrito = useContext(CarritoContext)

    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const [order, setOrder] = useState({});

    const [token, setToken] = useState(undefined);

    const change = (event) => {
        const newUser = {...user, [event.target.name]: event.target.value}
        setUser(newUser);
        setOrder(
            {
                buyer: {...user},
                items: [
                    ...carrito.carrito
                ],
                total: carrito.totalPagar
            }
        )
    }

    const sendOrder = () => {
            const db = getFirestore();
            const ordersCollection = collection(db, "orders");
            if(carrito.carrito.length === 0){
                return
            }else{
                addDoc(ordersCollection, order).then((snapshot)=>setToken(snapshot.id))
            }
    };  

    return(
        <div className="formContainer">
            {token === undefined ? 
            <form onSubmit={(event) => event.preventDefault()}>
                <div className="inputs">
                    <input type="text" name="name" placeholder="Nombre" onChange={change} required/>
                    <input type="text" name="phone" placeholder="Telefono" onChange={change} required/>
                </div>
                <input type="email" name="email" placeholder="Tu correo electronico" onChange={change} required/>
                <button onClick={() => {
                    sendOrder()
                    carrito.clearCart();
                }}>Finalizar compra</button>
            </form>
            :
            <div className="compraRealizada">
                <h2>Compra realizada tu token de compra es </h2>
                <h3> {token} </h3>
            </div>
            }
        </div>
    )
}

export default Form;