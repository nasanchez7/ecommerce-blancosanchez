import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const [description, setDescription] = useState([]);

    const getItem = async () => {
        const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=celulares');
        const data = await response.json();
        setProducto(data.results[0]);
        setDescription(data.results[0].attributes[0])
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