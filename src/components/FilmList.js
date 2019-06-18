import React from 'react';
import Film from './Film';

const FilmList = (props) => {

  const filmNodes = props.data.map((film) => {
    return ( <Film key={film.id} name={film.name} url={film.url} /> )
    // Probably better to just pass in the full film --- movie={movie}
    // Won't break and require modification if properties are added to the films at a later date
  })

  return (
    <div>
      <ul>
        {filmNodes}
      </ul>
    </div>
  );
}

export default FilmList;
