import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const [description, setDescription] = useState([]);
    const { itemId } = useParams();

    const getItem = async () => {
        const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${itemId}`);
        const data = await response.json();
        const item = data.results.filter(producto => producto.title == itemId);
        console.log(item);
        setProducto(item[0]);
        setDescription(item[0].attributes[0]);
    }

    useEffect(() => {
        getItem();
    }, [])


    return (
        <div className="itemDetailContainer">
            <ItemDetail item={producto} description={description}/>
        </div>
    )
}

export default ItemDetailContainer;