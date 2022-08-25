
import Item from "./Item";

const ItemList = ({items}) => {

    return (
        <div className="cardList">
            {items.map((producto, index) => {
                return <Item title={producto.title} price={producto.price} image={producto.thumbnail} key={index} />
            })}
        </div>
    )
}

export default ItemList;