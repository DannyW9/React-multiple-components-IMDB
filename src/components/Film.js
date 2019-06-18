import React from 'react';

const Film = (props) => {
  return (
    <div>
      <li><a href={props.url} target="_blank"><h3>{props.name}</h3></a></li>
    </div>
  );
}

export default Film;
