import './Informacion.css'
import gato from '../assets/imgpripri.jpg'
import { Link } from 'react-router-dom';


function Informacion() {
    return(
        <div id="box-Info" className='animate__animated animate__zoomIn'>
            <div id='caja-izq'>
                <img  id='img-cajaizq' src={gato} alt="" />
            </div>
            <div id='caja-der'>
                <div id='caja-texto'>
                    <h1>Bienvenido a tu Web de Donaciones!</h1>
                </div>
                <div id='caja-productos'>
                    <p>Somos una plataforma que te permite donar a las causas que te interesen, como así también recibir donaciones por causas que quieras publicar.</p>
                    <p>Valoramos y exponemos tu reputación como Donante. Si donaste mucho, la comunidad no va dudar en ayudarte cuando lo necesites.</p>
                    <div id='box-botones-login'>
                        <Link to="/login"><button>Ingresar</button></Link>
                        <Link to="/register"><button>Crear cuenta</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Informacion