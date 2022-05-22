import React, {  useState, } from 'react';
import Card from './Card';
export default function CardContainer({ loading, list }) {
  const [className, setClass] = useState('fading');
  const handleScroll = (s) => s.target.scrollLeft === 0 ? setClass('fading') : setClass('');
  return (
    <div
      id='free_scroller'
      className={`media discover scroller_wrap ${className}`}
    >
      <div className='column_content flex scroller' onScroll={handleScroll}>
        {list.map(movie => <Card key={movie.id.toString()} item={movie} />)}
      </div>
    </div>
  );
}
