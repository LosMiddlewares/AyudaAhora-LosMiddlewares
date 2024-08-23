import './css/Home.css'

import Header from '../components/Header.jsx';
import Informacion from '../components/Informacion.jsx';
import Nosotros from '../components/Nosotros.jsx';
import Contacto from '../components/Contacto.jsx';
import Footer from '../components/Footer.jsx';

function Home() {

  return (
    <>
    <div id='box-all-home'>
      <Header/>
        <div id='pri-espacio-necesario'></div>
        <Informacion/>
        <div id='espacio-necesario'></div>
        <Nosotros/>
        <Contacto/>
      <Footer />
    </div>
    </>
  )
}
  export default Home