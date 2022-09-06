import ItemCount from "./ItemCount";

const ItemDetail = ({item, description}) => {
    return(
        <div className="item">
            <div className="itemImg">
                    <img src={item.thumbnail} alt={item.title}/>
                </div>
                <div className="itemDetail">
                    <div className="favorite">
                        <h4 className="condition"> {item.condition} </h4>
                        <i className='bx bx-heart' ></i>
                    </div>
                    <h3 className="title">{item.title} </h3>
                    <h4>Vendido por {description.value_name} </h4>
                    <h4 className="price">$ {item.price}</h4>
                    <h5>Cantidad vendida: {item.sold_quantity} </h5>
                    <ItemCount initial={1} stock={item.available_quantity}/>
                </div>
        </div>
    )
}

export default ItemDetail;