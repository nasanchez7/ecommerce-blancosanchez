const Footer = () => {
    return(
        <div className="footerContainer">
            <div className="logo">
                <img src="/logo.png" alt="logo"/>
                <h2>OpenMarket</h2>
            </div>
            <div className="links">
                <h3>Trabaja con nosotros</h3>
                <h3>Contacto</h3>
                <h3>Envios</h3>
            </div>
            <div className="links">
                <h3>Terminos y condiciones</h3>
                <h3>Privacidad</h3>
                <h3>Ayuda</h3>
            </div>
            <div className="links">
                <h3>Instagram</h3>
                <h3>Twitter</h3>
                <h3>Facebook</h3>
            </div>
            <div className="copy">
                <h3>Copyright © 2022 OpenMarket</h3>
            </div>
        </div>
    )
}

export default Footer;