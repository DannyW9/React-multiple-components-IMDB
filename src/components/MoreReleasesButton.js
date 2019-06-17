import React from 'react';

const MoreReleasesButton = () => {
  return(
    <form action="https://www.imdb.com/calendar/?region=gb">
      <input type="submit" value="See more upcoming releases" />
    </form>
  );
}

export default MoreReleasesButton;
