
import { useEffect, useState } from "react";
import Carrusel from "../components/Carrusel";
import ItemList from "../components/ItemList";

const ItemListContainer = () => {

    //Definimos estados

    const [productos, setProductos] = useState([]);

    //Traemos productos de api

    const obtenerProductos = async () =>{
        const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=celulares`);
        const data = await response.json();
        setProductos(data.results);
    }

    //UseEffect

    useEffect(() => {
        obtenerProductos();
    }, [])

    //console.log(productos);

    return (
        <div>
            <Carrusel />
            <div className="listContainer">
                <h1>Productos destacados</h1>
                <ItemList items={productos}/>
            </div>
        </div>

    )
}

export default ItemListContainer;