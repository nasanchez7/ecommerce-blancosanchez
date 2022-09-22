import { useEffect, useState, useContext } from "react";
import Carrusel from "../components/Carrusel";
import ItemList from "../components/ItemList";
import { collection, getFirestore , getDocs } from "firebase/firestore"

const ItemListContainer = () => {

    //Definimos estados

    const [productos, setProductos] = useState([]);

    //Traemos productos de api

    const obtenerProductos = async () =>{
        
        const db = getFirestore();

        const items = collection(db, "items");

        getDocs(items).then((snapshot)=>{
            setProductos(snapshot.docs.map((doc) => ({ id:doc.id, ...doc.data() })));
        })

    }

    //UseEffect

    useEffect(() => {
        obtenerProductos();
        console.log(productos);
    }, [])


    return (
        <div>
            <Carrusel/>
            <div className="listContainer">
                <h1>Productos destacados</h1>
                <ItemList items={productos}/>
            </div>
        </div>

    )
}

export default ItemListContainer;