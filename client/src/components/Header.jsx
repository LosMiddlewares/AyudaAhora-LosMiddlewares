import logo from '../assets/AyudaRosa.png'
import { Link } from 'react-router-dom';
import './Header.css'
import { useNavigate } from 'react-router-dom';


function Header({ onNavClick }) {

    const navigate = useNavigate();

    return(
        <div id='header' className='animate__animated animate__fadeInDown'>
            <div id='nav-box'>
                <div id='caja-img-logo'>
                    <Link to="/">
                        <img src={logo} id="logo" className="hover-image" alt="" />
                    </Link>
                </div>
                <div id='botonera'>
                    <button onClick={() => onNavClick('Informacion')}>Informacion</button>
                    <button onClick={() => onNavClick('Nosotros')}>Nosotros</button>
                    <button onClick={() => onNavClick('Contacto')}>Contacto</button>
                    <button onClick={() => navigate('/login')}>Ingresar</button>
                </div>
                
            </div>    
        </div>

    )
}

export default Header