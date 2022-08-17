const Nav = () => {
    return(
        <nav>
            <ul>
                <a href=''><li>Inicio</li></a>
                <a href=''><li>Menu</li></a>
            </ul>
            <div className="logo">
                <a href="./index.html"><img src="./burgersvg.png" alt="burgerlogo"/></a>  
                <h2><a href="./index.html">iBurger</a></h2>
            </div>
            <ul>
                <a href=''><li>Contacto</li></a>
                <a href=''><li>Locales</li></a>
            </ul>
      </nav>
    );
}

export default Nav;