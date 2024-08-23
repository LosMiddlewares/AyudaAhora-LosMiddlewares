import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import './Footer.css'
import { Link } from 'react-router-dom';


function Footer(){
    return(
        <div id='caja-footer' className='animate__animated animate__fadeInUp'>
            <div id='caja-redes'>
                <Link ><div className='social-icon'><FaXTwitter /></div></Link>
                <Link ><div className='social-icon'><IoLogoInstagram /></div></Link>
                <Link ><div className='social-icon'><FaFacebookSquare /></div></Link>
                <Link ><div className='social-icon'><CgMail /></div></Link>
                <Link ><div className='social-icon'><FaWhatsapp /></div></Link>
            </div>
            <div id='caja-texto-footer'>
                <p>© Soluciones Inteligentes - Todos los derechos reservados.</p>
            </div>
        </div> 

    )
}
export default Footer