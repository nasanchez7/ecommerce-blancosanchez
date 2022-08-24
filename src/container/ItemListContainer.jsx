import ItemCount from "../components/ItemCount";

const ItemListContainer = () => {
    return (
        <div className="itemContainer">
            <ItemCount stock={5} initial={1}/>
        </div>
    )
}

export default ItemListContainer;