
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import CarritoContext from "../context/CarritoContext";
import Buscador from "./Buscador";
import CartWidget from "./CartWidget";

const Nav = () => {
    const categorias = [
        {
            name: "Samsung",
            path: "samsung"
        },
        {
            name: "iPhone",
            path: "iphone"
        },
        {
            name: "Motorola",
            path: "motorola"
        }
    ]

    const carrito = useContext(CarritoContext);

    useEffect(() =>{
        const btnDrop = document.getElementById("btnDrop")
        const dropdown = document.getElementById("dropdown");
        const btnClose = document.getElementById("btnClose");
        btnDrop.addEventListener("click", () => {
            dropdown.classList.remove("dropdown-oculto");
            dropdown.classList.add("dropdown-activo");
            btnClose.innerText = "x"
        })
        btnClose.addEventListener("click", () => {
            dropdown.classList.remove("dropdown-activo");
            dropdown.classList.add("dropdown-oculto");
            btnClose.innerText = ""
            console.log("click");
        })
    },[])

    return (
            <nav>
                <Link to={`/`}>
                    <div className="logo">
                            <img src="/logo.png" alt="logo"/>
                            <h2>OpenMarket</h2>
                    </div>
                </Link>
                <Buscador/>
                <div className="nav-items">
                    <div className="categorias">
                            <h3 id="btnDrop">Marcas</h3>
                            <span id="btnClose">
                                
                            </span>
                            <ul className="dropdown dropdown-oculto " id="dropdown">
                                {categorias.map((categoria, index) =>{
                                    return <li key={index}><Link to={`/categoria/${categoria.path}`}>{categoria.name}</Link></li>
                                })}
                            </ul>
                    </div>
                    <ul>
                        <Link to={"/"}><h3>Catalogo</h3></Link>  
                        <Link to={"/favoritos"}><h3>Favoritos</h3></Link> 
                    </ul>
                </div>
                {carrito.carrito.length == 0 ? "" :
                <Link to={'/cart'}>
                    <CartWidget />
                </Link>
                }
            </nav>
    );
}

export default Nav;