import imgPost from '../assets/userRandom.jpg';

export const Post = ({ title, description }) => {

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
        <button>Ver más</button>
      </div>
    </div>
  );
}
