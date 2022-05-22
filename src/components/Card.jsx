import { Link } from "react-router-dom";
export default function Card({ item }) {
  return (
    <div className='card mr-5'>
      <div className='image '>
        <div className='wrapper '>
          <Link
            className='image'
            to={`/movie/${item.id}`}
            title={item.original_title}
          >
            <img
              loading='lazy'
              className='poster rounded-md'
              src={`${process.env.REACT_APP_IMAGE_URL}w500/${item.poster_path}`}
              alt=''
            />
          </Link>
        </div>
        <div className='options'>
          <div className='glyphicons_v2 circle-more white'></div>
        </div>
      </div>
      <div className='content'>
        <h2>
          <Link to={`/movie/${item.id}`} title={item.original_title}>
            {item.title}
          </Link>
        </h2>
        <p>{item.release_date}</p>
      </div>
    </div>
  );
}
