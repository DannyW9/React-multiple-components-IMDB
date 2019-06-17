import React from 'react';

const Film = (props) => {
  return (
    <div>
      <a href={props.url}><h3>{props.name}</h3></a>

    </div>
  );
}

export default Film;
