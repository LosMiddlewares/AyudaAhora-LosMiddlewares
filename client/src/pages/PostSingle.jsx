import './css/PostSingle.css';
import imgPost from '../assets/userRandom.jpg';
import perris from '../assets/perro.jpg';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { environments } from '../config/environments.js';

function PostSingle() {

  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
  const fetchPost = async () => {
    
    try {
      const res = await fetch(`${environments.API_URL}/posts/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error(errorData.error || 'Error al obtener el post');
        return;
      }

      const data = await res.json();
      console.log(data);
      setPost(data);  // Guarda los posts en el estado
    } catch (error) {
      console.error('Error al obtener el post:', error);
    }
  }
  fetchPost();  // Llama a la función para obtener los posts
}, []);

  return (
    <>
      <div id='box-single-post'>
        <Header/>
          <div id='box-main-post-single' className='animate__animated animate__zoomIn'>
            <div id='post-single-title'>
              <img src={imgPost} alt="" />
              <h4>@{post.title}</h4>
            </div>
            <div id='post-single-text'>
              <p>{post.description}</p>
            </div>
            <div id='box-img-cash'>
              <div id='caja-img-post'>
                <img src={perris} alt="" />
              </div>
              <div id='caja-post-meta'>
                <h4>Monto a llegar: ${post.goal_amount}</h4>
                <h4>Completado: ${post.current_amount}</h4>
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