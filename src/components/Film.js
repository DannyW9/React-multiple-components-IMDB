import React from 'react';

const Film = (props) => {
  return (
    <div>
      <ul>
        <li><a href={props.url}><h3>{props.name}</h3></a></li>
      </ul>
    </div>
  );
}

export default Film;
