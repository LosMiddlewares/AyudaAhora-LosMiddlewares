import './css/Posts.css'
import imgPost from '../assets/userRandom.jpg';
import {Post} from '../components/Post.jsx';
import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { environments } from '../config/environments.js';

function Posts() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`${environments.API_URL}/posts`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!res.ok) {
          const errorData = await res.json();
          console.error(errorData.error || 'Error al obtener los posts');
          return;
        }

        const data = await res.json();
        setPosts(data);  // Guarda los posts en el estado
      } catch (error) {
        console.error('Error al obtener los posts:', error);
      }
    };

    fetchPosts();  // Llama a la función para obtener los posts
  }, []);


  return (
    <>
    <div id='box-all-body'>
      <Header />
      <div id='box-main-posts' className='animate__animated animate__zoomIn'>
        {posts.length > 0 ? (
          posts.map(post => (
            <Post
              key={post.id}
              title={post.title}
              description={post.description}
            />
          ))
        ) : (
          <p>No hay posts disponibles</p>
        )}
      </div>
      <Footer />
    </div>
  </>
  )
}
export default Posts