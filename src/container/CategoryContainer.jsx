import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import CarritoContext from "../context/CarritoContext";
import Carrusel from "../components/Carrusel";

const CategoryContainer = () => {

    const {categoriaId} = useParams();
    const [productos, setProductos] = useState([]);

    const obtenerProductos = async () =>{
        const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${categoriaId}`);
        const data = await response.json();
        setProductos(data.results);
    }

    obtenerProductos();

    //Context

    const carrito = useContext(CarritoContext)

    useEffect(() => {
    }, [])

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