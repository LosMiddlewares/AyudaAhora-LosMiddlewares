import './css/AgregarPost.css'
import imgPost from '../assets/userRandom.jpg';
import {Post} from '../components/Post.jsx';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function AgregarPost() {

  return (
    <>
      <div id='box-all-add-post'>
        <Header/>
        <div id='box-main-add-post' className='animate__animated animate__zoomIn'>
            <div id='box-form-add-post'>
                <div className="caja-inputs">
                    <label htmlFor="name">Título</label>
                    <input
                        type="text"
                        value={titlePost}
                        onChange={settitlePost}
                        placeholder="Título"
                        required
                        id="titulo"
                    />
                </div>
            </div>
        </div>
        <Footer />
      </div>
      
    </>
  )
}
export default AgregarPost