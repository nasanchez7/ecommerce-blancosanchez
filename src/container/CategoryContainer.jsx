import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import Carrusel from "../components/Carrusel";
import { collection, getFirestore , getDocs, query, where } from "firebase/firestore"

const CategoryContainer = () => {

    const {categoriaId} = useParams();
    const [productos, setProductos] = useState([]);

    const obtenerProductos = async () =>{
        const db = getFirestore();
        const items = query(collection(db, "items"), where("category", "==", categoriaId));
        getDocs(items).then((snapshot)=>{
            setProductos(snapshot.docs.map((doc) => ({ id:doc.id, ...doc.data() })));
        })
    }

    obtenerProductos();

    return (
        <div className="categoriaContainer">
            <Carrusel/>
            <div className="categoriaTitulo">
                <h1>Productos </h1>
                <h2> / {categoriaId} </h2>
            </div>
            <ItemList items={productos}/>
        </div>
    )

}

export default CategoryContainer;