import './css/AgregarPost.css'
import imgPost from '../assets/userRandom.jpg';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

import { usePost } from '../hooks/usePost.js';

function AgregarPost() {

  const {
    title, setTitle,
    description, setDescription,
    goal_amount, setGoal_amount,
    image, setImage,
    error, success,
    handleSubmitPost,
} = usePost();

  return (
    <>
      <div id='box-all-add-post'>
        <Header/>
        <div id='box-main-add-post' className='animate__animated animate__zoomIn'>
        <form onSubmit={handleSubmitPost}>
          {error && <p className='error'>{error}</p>}
          {success && <p className='success'>Post creado exitosamente</p>}
          <div id='box-form-add-post'>
                <div className="caja-inputs-post">
                    <label htmlFor="name">Título</label>
                    <input
                        type="text"
                        value={title}
                        onChange={setTitle}
                        placeholder="Título"
                        required
                        id="titulo"
                    />
                </div>
                <div className="caja-inputs-post">
                    <label htmlFor="name">Descripción</label>
                    <textarea
                        type="text"
                        value={description}
                        onChange={setDescription}
                        required
                        id="descripcion"
                    />
                </div>
                <div className="caja-inputs-post">
                    <label htmlFor="name">Meta</label>
                    <input
                        type="number"
                        value={goal_amount}
                        onChange={setGoal_amount}
                        placeholder="Meta"
                        required
                        id="meta"
                    />
                </div>
                <div className="caja-inputs-post">
                    <label htmlFor="name">Imagen</label>
                    <input
                        type="text"
                        value={image}
                        onChange={setImage}
                        placeholder="Imagen"
                        required
                        id="imagen"
                    />
                </div>
                <button id="boton-publicar" type="submit">Publicar</button>
          </div>
        </form>
        </div>
        <Footer />
      </div>
      
    </>
  )
}
export default AgregarPost