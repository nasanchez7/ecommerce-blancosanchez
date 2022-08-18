import ItemListContainer from "../container/ItemListContainer";
import CartWidget from "./CartWidget";

const Nav = () => {
    return (
            <nav>
                <ul>
                    <a href="./index.html"><li>Inicio</li></a>
                    <a href="./index.html"><li>Menu</li></a>
                </ul>
                <div className="logo">
                    <a href="./index.html"><img src="./burgersvg.png" alt="burgerlogo" /></a>
                    <a href="./index.html"><h2>iBurger</h2></a>
                </div>
                <ul>
                    <a href="./index.html"><li>Contacto</li></a>
                    <a href="./index.html"><li>Locales</li></a>
                </ul>
                <CartWidget />
            </nav>
    );
}

export default Nav;