
const Item = ({title, price, image, marca}) => {
    return(
        <div className="card">
            <div className="cardImage">
                <img src={image} alt={title}/>
            </div>
            <div className="cardPrice">
                <div className="cardFavourite">
                    <h2> {title} </h2>
                    <i className='bx bx-heart' ></i>
                </div>
                <h4>Vendido por {marca}</h4>
                <h3> $ {price} </h3>
                <a href="#">Ver mas detalles</a>
            </div>
        </div>
    )
}

export default Item;
