import { Link } from "react-router-dom";

const Item = ({title, price, image, description, id}) => {
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
                <h4>{description}</h4>
                <h3> $ {price} </h3>
                <Link to={`/item/${id}`}>Ver mas detalles</Link>
            </div> 
        </div>
    )
}

export default Item;
