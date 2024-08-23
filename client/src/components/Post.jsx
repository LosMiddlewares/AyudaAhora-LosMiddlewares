import imgPost from '../assets/userRandom.jpg';

export const Post = ({userName, text}) => {
  return (
    <div className='box-post'>
      <div className='box-img-userName'>
        <img src={imgPost} alt="" />
        <h4>@{userName}</h4>
      </div>
      <div className='box-text-post'>
        <p>{text}</p>
      </div>
      <div className='box-button-post'>
        <button>Ver más</button>
      </div>
    </div>
  )
}
