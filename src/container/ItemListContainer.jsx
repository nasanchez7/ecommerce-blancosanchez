
import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";

const ItemListContainer = () => {

    //Definimos estados

    const [productos, setProductos] = useState([]);

    //Traemos productos de api

    const obtenerProductos = async () =>{
        const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=celulares');
        const data = await response.json();
        setProductos(data.results);
    }

    //UseEffect

    useEffect(() => {
        obtenerProductos();
    }, [])

    return (
        <div>
            <ItemList items={productos}/>
        </div>
    )
}

export default ItemListContainer;