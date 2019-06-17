import React from 'react';
import FilmBox from './containers/FilmBox';
import FilmForm from './components/FilmForm';
import './App.css';

function App() {
  return (
    <div>
      <FilmForm />
      <hr/>
      <FilmBox />
    </div>
  );
}

export default App;
