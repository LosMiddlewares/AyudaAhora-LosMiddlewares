import logo from '../assets/AyudaRosa.png'
import { Link } from 'react-router-dom';
import './Header.css'
import { useNavigate } from 'react-router-dom';


function Header() {

    const navigate = useNavigate();

    const scrollToHome = (event) => {
        event.preventDefault();
        const element = document.getElementById('pri-espacio-necesario');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToNosotros = (event) => {
        event.preventDefault();
        const element = document.getElementById('espacio-necesario');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollContacto = (event) => {
        event.preventDefault();
        const element = document.getElementById('box-Con');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <div id='header' className='animate__animated animate__fadeInDown'>
            <div id='nav-box'>
                <div id='caja-img-logo'>
                    <Link to="/">
                        <img src={logo} id="logo" className="hover-image" alt="" />
                    </Link>
                </div>
                <div id='botonera'>
                    <button onClick={scrollToHome}>Home</button>
                    <button onClick={scrollToNosotros}>Nosotros</button>
                    <button onClick={scrollContacto}>Contacto</button>
                    <button onClick={() => navigate('/login')}>Ingresar</button>
                </div>
                
            </div>    
        </div>

    )
}

export default Header