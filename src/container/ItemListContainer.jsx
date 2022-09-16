import { useEffect, useState, useContext } from "react";
import Carrusel from "../components/Carrusel";
import ItemList from "../components/ItemList";
import CarritoContext from "../context/CarritoContext";

const ItemListContainer = () => {

    //Context

    //const carrito = useContext(CarritoContext)

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
    })

    //console.log(productos);

    return (
        <div>
            <div className="listContainer">
                <h1>Productos destacados</h1>
                <ItemList items={productos}/>
            </div>
        </div>

    )
}

export default ItemListContainer;