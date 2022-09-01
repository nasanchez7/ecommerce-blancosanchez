import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);

    const getItem = async () => {
        const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=celulares');
        const data = await response.json();
        setProducto(data.results[0]);
    }

    useEffect(() => {
        getItem();
    }, [])

    console.log(producto);

    return (
        <div className="itemDetailContainer">
            <ItemDetail item={producto}/>
        </div>
    )

}

export default ItemDetailContainer;