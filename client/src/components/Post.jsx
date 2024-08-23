import { useNavigate } from 'react-router-dom';
import imgPost from '../assets/userRandom.jpg';

export const Post = ({ id, title, description }) => {

  const navigate = useNavigate();
  return (
    <div className='box-post'>
      <div className='box-img-userName'>
        <img src={imgPost} alt="" />
        <h4>@{title}</h4>
      </div>
      <div className='box-text-post'>
        <p>{description}</p>
      </div>
      <div className='box-button-post'>
        <button
        onClick={() => {
          navigate(`/post/${id}`);
        }
        }
        >Ver más</button>
      </div>
    </div>
  );
}
