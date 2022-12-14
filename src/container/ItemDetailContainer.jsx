import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import {getFirestore , getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const { itemId } = useParams();

    const getItem = async () => {
        const db = getFirestore();
        const item = doc(db, "items", itemId);
        getDoc(item).then((snapshot) => {
            if(snapshot.exists()){
                setProducto({ id:snapshot.id, ...snapshot.data() });
            }
        })
    }

    useEffect(() => {
        getItem();
    },[])

    return (
        <div className="itemDetailContainer">
            <ItemDetail item={producto}/>
        </div>
    )
}

export default ItemDetailContainer;