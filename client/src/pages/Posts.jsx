import './css/Posts.css'
import imgPost from '../assets/userRandom.jpg';
import {Post} from '../components/Post.jsx';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function Posts() {

  return (
    <>
      <div id='box-all-body'>
        <Header/>
          <div id='box-main-posts' className='animate__animated animate__zoomIn'>
            <div className='box-post'>
              <div className='box-img-userName'>
                <img src={imgPost} alt="" />
                <h4>@CaluBritez</h4>
              </div>
              <div className='box-text-post'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit. Elit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit. Sipsum dolor sit amet consectetur ........ </p>
              </div>
              <div className='box-button-post'>
                <button>Ver más</button>
              </div>
            </div>
            <div className='box-post'>
              <div className='box-img-userName'>
                <img src={imgPost} alt="" />
                <h4>@Richard</h4>
              </div>
              <div className='box-text-post'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit. Elit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit. Sipsum dolor sit amet consectetur ........ </p>
              </div>
              <div className='box-button-post'>
                <button>Ver más</button>
              </div>
            </div>
            <div className='box-post'>
              <div className='box-img-userName'>
                <img src={imgPost} alt="" />
                <h4>@AndyRodinck</h4>
              </div>
              <div className='box-text-post'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit. Elit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit. Sipsum dolor sit amet consectetur ........ </p>
              </div>
              <div className='box-button-post'>
                <button>Ver más</button>
              </div>
            </div>
            <div className='box-post'>
              <div className='box-img-userName'>
                <img src={imgPost} alt="" />
                <h4>@RitoPompa</h4>
              </div>
              <div className='box-text-post'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit. Elit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit. Sipsum dolor sit amet consectetur ........ </p>
              </div>
              <div className='box-button-post'>
                <button>Ver más</button>
              </div>
            </div>
            <div className='box-post'>
              <div className='box-img-userName'>
                <img src={imgPost} alt="" />
                <h4>@LaFurcade</h4>
              </div>
              <div className='box-text-post'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit. Elit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit. Sipsum dolor sit amet consectetur ........ </p>
              </div>
              <div className='box-button-post'>
                <button>Ver más</button>
              </div>
            </div>
            <Post userName="LuisSuarez" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit. Sipsum dolor sit amet consectetur adipisicing elit." />
          </div>
        <Footer />
      </div>
      
    </>
  )
}
  export default Posts