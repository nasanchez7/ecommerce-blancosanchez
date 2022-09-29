import { useEffect, useState } from "react";
import Carrusel from "../components/Carrusel";
import ItemList from "../components/ItemList";
import { collection, getFirestore , getDocs } from "firebase/firestore"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const obtenerProductos = async () =>{
        const db = getFirestore();
        const items = collection(db, "items");
        getDocs(items).then((snapshot)=>{
            setProductos(snapshot.docs.map((doc) => ({ id:doc.id, ...doc.data() })));
        })
    }

    useEffect(() => {
        obtenerProductos();
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