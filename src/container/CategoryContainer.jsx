import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";

const CategoryContainer = () => {
    const {categoriaId} = useParams();
    const [productos, setProductos] = useState([]);
    console.log(categoriaId);

    const obtenerProductos = async () =>{
        const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${categoriaId}`);
        const data = await response.json();
        setProductos(data.results);
    }

    obtenerProductos();

    useEffect(() => {
    },[])

    return (
        <div className="categoriaContainer">
            <div className="categoriaTitulo">
                <h1>Productos </h1>
                <h2> / {categoriaId} </h2>
            </div>
            <ItemList items={productos}/>
        </div>
    )

}

export default CategoryContainer;