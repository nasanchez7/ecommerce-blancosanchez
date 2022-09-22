import Item from "./Item";

const ItemList = ({items}) => {

    return (
        <div className="cardList">
            {items.map((producto) => {
                return <Item id={producto.id} description={producto.description}  title={producto.title} price={producto.price} image={producto.img} key={producto.id} />
            })}
        </div> 
    )
}

export default ItemList; 