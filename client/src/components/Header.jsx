import logo from '../assets/AyudaRosa.png'
import { Link } from 'react-router-dom';
import './Header.css'


function Header({ onNavClick }) {
    return(
        <div id='header'>
            <div id='nav-box'>
                <div id='caja-img-logo'>
                    <Link to="/">
                        <img src={logo} id="logo" className="hover-image" alt="" />
                    </Link>
                </div>
                <div id='botonera'>
                    <button onClick={() => onNavClick('Informacion')}>Información</button>
                    <button onClick={() => onNavClick('Nosotros')}>Nosotros</button>
                    <button onClick={() => onNavClick('Contacto')}>Contacto</button>
                </div>
                
            </div>    
        </div>

    )
}

export default Header