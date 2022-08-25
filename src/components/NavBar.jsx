
import CartWidget from "./CartWidget";

const Nav = () => {
    return (
            <nav>
                <div className="logo">
                    <a href="./index.html"><img src="logo.png" alt="logo"/></a>
                    <a href="./index.html"><h2>OpenMarket</h2></a>
                </div>
                <ul>
                    <a href="./index.html"><li>Catalogo</li></a>
                    <a href="./index.html"><li>Ofertas</li></a>
                    <a href="./index.html"><li>Favoritos</li></a>
                </ul>
                <CartWidget />
            </nav>
    );
}

export default Nav;