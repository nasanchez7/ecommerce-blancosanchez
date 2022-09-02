
import Item from "./Item";

const ItemList = ({items}) => {

    return (
        <div className="cardList">
            {items.map((producto, index) => {
                return <Item marca={producto.attributes[0].value_name} title={producto.title} price={producto.price} image={producto.thumbnail} stock={producto.available_quantity} key={index} />
            })}
        </div>
    )
}

export default ItemList;