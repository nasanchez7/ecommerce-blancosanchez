import ItemCount from "./ItemCount";


const Item = ({title, price, image}) => {
    return(
        <div className="card">
            <div className="cardImage">
                <img src={image} alt={title}/>
                <h2> {title} </h2>
            </div>
            <div className="cardPrice">
                <a href="">Ver mas detalles</a>
                <h3> $ {price} </h3>
                <ItemCount initial={1} stock={5} />
            </div>
        </div>
    )
}

export default Item;
