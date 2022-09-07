import { useEffect } from "react";
import { Link } from "react-router-dom";

const Carrusel = () => {

    const siguiente = () => {
        const sliderContenedor = document.getElementById("sliderContenedor");

        if(sliderContenedor.children.length > 0){
            const primerElemento = sliderContenedor.children[0];

            const tamañoSlide = sliderContenedor.children[0].offsetWidth;

            sliderContenedor.style.transition = 'all 1000ms ease-out'
            sliderContenedor.style.transform = `translateX(-${tamañoSlide}px)`;

            const transicion = () => {
                sliderContenedor.style.transition = 'none';
                sliderContenedor.style.transform = `translateX(0)`;
                sliderContenedor.appendChild(primerElemento);

                sliderContenedor.removeEventListener("transitionend", transicion)
            }

            sliderContenedor.addEventListener("transitionend", transicion);
            
        }
    }

    const anterior = () => {
        const sliderContenedor = document.getElementById("sliderContenedor");

        if(sliderContenedor.children.length > 0){
            const index = sliderContenedor.children.length - 1;
            const ultimoElemento = sliderContenedor.children[index];
           

            sliderContenedor.insertBefore(ultimoElemento, sliderContenedor.firstChild);

            sliderContenedor.style.transition = 'none'

            const tamañoSlide = sliderContenedor.children[0].offsetWidth;
            sliderContenedor.style.transform = `translateX(-${tamañoSlide}px)`

            setTimeout(()=>{
                sliderContenedor.style.transition = 'all 1000ms ease-out'
                sliderContenedor.style.transform = `translateX(0)`;
            }, 100)
        }
    }


    useEffect(() => {
        setInterval(()=>{
            siguiente();
        }, 6500)
    },[])

    return(
        <div className="productoDestacado">

                <div className="slider">
                        
                    <div className="sliderContenedor" id="sliderContenedor">
        
                        <div className="sliderItem descripcionProducto">
                            <div>
                                <div className="slider-titulo">
                                    <h2>Descubre los mejores</h2>
                                    <h3>productos Apple</h3>
                                    <h4>Ultimos modelos y al mejor precio</h4>
                                </div>
                                <div className="slider-btn">
                                    <button> <Link to={`/categoria/iphone`}>Ver todos los productos</Link> </button>
                                </div>
                            </div>
                            <div className="slider-img">
                                <img src="/iphone.png" alt=""/>
                            </div>
                        </div>

                        <div className="sliderItem descripcionProducto">
                            <div>
                                <div className="slider-titulo">
                                    <h2>Descubre los mejores</h2>
                                    <h3>productos Samsung</h3>
                                    <h4>Ultimos modelos y al mejor precio</h4>
                                </div>
                                <div className="slider-btn">
                                    <button> <Link to={'/categoria/samsung'}>Ver todos los productos</Link></button>
                                </div>
                            </div>
                            <div className="slider-img">
                                <img src="/samsung.png" alt=""/>
                            </div>
                        </div>

                        <div className="sliderItem descripcionProducto">
                            <div>
                                <div className="slider-titulo">
                                    <h2>Descubre los mejores</h2>
                                    <h3>accesorios tech</h3>
                                    <h4>Ultimos modelos y al mejor precio</h4>
                                </div>
                                <div className="slider-btn">
                                    <button>Ver todos los productos</button>
                                </div>
                            </div>
                            <div className="slider-img">
                                <img src="/airpods.png" alt=""/>
                            </div>
                        </div>

                    </div>
        
                </div>
        
                <div className="slider-botones">
                    <button onClick={anterior}><i className='bx bx-chevron-left'></i></button>
                    <button onClick={siguiente}><i className='bx bx-chevron-right'></i></button>
                </div>
        
            </div>



    )


}

export default Carrusel;