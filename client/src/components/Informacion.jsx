import './Informacion.css'
import gato from '../assets/gaturroDev.jpg'
import { TiShoppingCart } from "react-icons/ti";
import { TbBuildingFactory } from "react-icons/tb";
import { MdOutlineSchool } from "react-icons/md";
import { GiInjustice } from "react-icons/gi";


function Informacion() {
    return(
        <div id="box-Info">
            <div id='caja-izq'>
                <img  id='img-cajaizq' src={gato} alt="" />
            </div>
            <div id='caja-der'>
                <div id='caja-texto'>
                    <h1>Crearemos tu Sistema Web!</h1>
                </div>
                <div id='caja-productos'>
                    <div id='ecommerce' className='productos'>
                        <div className='icono-producto'>
                            <div className='icon'><TiShoppingCart /></div>
                        </div>
                        <div className='texto-producto'>
                            <h2>E-commerce</h2>
                        </div>
                    </div>
                    <div id='juridico' className='productos'>
                        <div className='icono-producto'>
                            <div className='icon'><TbBuildingFactory /></div>
                        </div>
                        <div className='texto-producto'>
                            <h2>Administración de Stock</h2>
                        </div>
                    </div>
                    <div id='educacion' className='productos'>
                        <div className='icono-producto'>
                            <div className='icon'><MdOutlineSchool /></div>
                        </div>
                        <div className='texto-producto'>
                            <h2>Instituciones Educativas</h2>
                        </div>
                    </div>
                    <div id='stock' className='productos'>
                        <div className='icono-producto'>
                            <div className='icon'><GiInjustice /></div>
                        </div>
                        <div className='texto-producto'>
                            <h2>Estudios Jurídicos</h2>
                        </div>
                    </div>      
                </div>
            </div>
        </div>
    )
}

export default Informacion