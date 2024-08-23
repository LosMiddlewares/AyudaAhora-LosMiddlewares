import './css/PostSingle.css';
import imgPost from '../assets/userRandom.jpg';
import perris from '../assets/perro.jpg';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function PostSingle() {

  return (
    <>
      <div id='box-single-post'>
        <Header/>
          <div id='box-main-post-single' className='animate__animated animate__zoomIn'>
            <div id='post-single-title'>
              <img src={imgPost} alt="" />
              <h4>@Richard</h4>
            </div>
            <div id='post-single-text'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit. Elit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit. Sipsum dolor sit amet consectetur .Lorem ipsum dolor sit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit. </p>
            </div>
            <div id='box-img-cash'>
              <div id='caja-img-post'>
                <img src={perris} alt="" />
              </div>
              <div id='caja-post-meta'>
                <h4>Monto a llegar: $100.000</h4>
                <h4>Completado: 60%</h4>
                <button>Donar</button>
              </div>
            </div>
          </div>
        <Footer />
      </div>
      
    </>
  )
}
export default PostSingle