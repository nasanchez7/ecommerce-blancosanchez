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
        <div>
            <ItemList items={productos}/>
        </div>
    )

}

export default CategoryContainer;