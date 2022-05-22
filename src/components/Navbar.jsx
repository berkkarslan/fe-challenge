import { Link } from "react-router-dom";
export default function App() {
  return (
    <header>
      <div className='flex justify-center w-full'>
        <div className='sub_media'>
          <div className='flex justify-start flex-nowrap items-center overflow-visible'>
            <Link className='logo mx-5' to='/'>
              <img
                src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
                alt=''
                width={154}
                height={20}
              />
            </Link>
            <div className='menu'>
              <Link className='menu-item' to='/'>
                Filmler
              </Link>
              <Link className='menu-item' to='/'>
                Diziler
              </Link>
              <Link className='menu-item' to='/'>
                Kişiler
              </Link>
              <Link className='menu-item' to='/'>
                Daha Fazla
              </Link>
            </div>
          </div>
          <div className='search'>
            <img
              src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg'
              alt='search'
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
