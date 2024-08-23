import './Nosotros.css'
import calu from '../assets/Calu.png'
import sil from '../assets/Sil.jpg'
import logoipf from '../assets/logoipf.png'
import dani from '../assets/miinor.png'


function Nosotros() {
    return(
        <div id="box-Noso" className='animate__animated animate__zoomIn'>
            <div id='box-title-losMiddlewares'>
                <h1>Nuestros Desarrolladores</h1>
                <img src={logoipf} alt="" />
            </div>
            <div id='box-developers'>
                <div id='calu' className='dev'>
                    <div className='dev-pic'>
                        <img src={calu} alt="" />
                    </div>
                    <div className='dev-text'>
                        <h2>Lucas Gastón Britez</h2>
                        <h4>FrontEnd Developer</h4>
                        <p>Más de 5 años de experiencia en desarrollo web, especializado en el desarrollo de interfaces de usuario atractivas y responsivas. En su posición actual en TechSolutions, ha liderado la implementación de numerosos proyectos utilizando React.js, asegurando una experiencia de usuario fluida y accesible.</p>
                    </div>
                </div>
                <div id='sil' className='dev'>
                    <div className='dev-pic'>
                        <img src={sil} alt="" />
                    </div>
                    <div className='dev-text'>
                        <h2>Silvana Abigail Farías</h2>
                        <h4>BackEnd Developer</h4>
                        <p>Actualmente, trabaja como desarrollador full-stack en Innovatech, donde ha participado en la creación de aplicaciones web escalables utilizando tecnologías como Node.js y Angular. Su experiencia incluye el diseño y mantenimiento de bases de datos con MongoDB y SQL, así como la implementación de APIs RESTful.</p>
                    </div>
                </div>
                <div id='minor' className='dev'>
                    <div className='dev-pic'>
                        <img src={dani} alt="" />
                    </div>
                    <div className='dev-text'>
                        <h2>Carlos Fabian Villagra</h2>
                        <h4>BackEnd Developer</h4>
                        <p>Daniel tiene una experiencia de más de 4 años en el desarrollo de interfaces web modernas y dinámicas. En su rol actual en CreativeCoders, ha trabajado en diversos proyectos que requieren el uso de tecnologías como Vue.js, Nuxt.js y Tailwind CSS.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nosotros