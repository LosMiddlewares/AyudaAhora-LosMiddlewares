import './css/Home.css'
import { useState } from 'react';

import Header from '../components/Header.jsx';
import Informacion from '../components/Informacion.jsx';
import Nosotros from '../components/Nosotros.jsx';
import Contacto from '../components/Contacto.jsx';
import Footer from '../components/Footer.jsx';

function Home() {
  const [selectedSection, setSelectedSection] = useState('Informacion');

  const renderSection = () => {
      switch(selectedSection) {
          case 'Informacion':
              return <Informacion />;
          case 'Nosotros':
              return <Nosotros />;
          case 'Contacto':
              return <Contacto />;
          default:
              return <Informacion />;
      }
  };

  return (
    <>
      <Header onNavClick={setSelectedSection} />
      {renderSection()}
      <Footer />
    </>
  )
}
  export default Home