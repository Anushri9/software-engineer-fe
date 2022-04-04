import React, { useState } from 'react';
import './App.css';

import { addWatchedMovie, add, removeWatchedMovie, getWatchedMovies, getAllMovies } from './index.js';

const getMoviesComponents = (movies) => {
  var components = [];

  movies.forEach((movie) => {
    components.push(
      <div className="all">
        <div>
          <img src={movie.image} height="100px" />
        </div>
        <span>
          <a className="movie-watched" href="#" onClick={function () { addWatchedMovie(movie) }}>
            {movie.title}
          </a>
        </span>
        <br />
        <span>
          {movie.comment}
        </span>
        <br />
        <br />
      </div>
    )
  })

  return components;
}

const getWatchedMoviesComponents = (movies) => {
  var components = [];

  movies.forEach(function (movie) {
    components.push(movie && (
      <div className="watched">
        <div>
          <img src={movie.image} height="100px" />
        </div>
        <span>
          <a className="movie-watched" href="#" onClick={function () { removeWatchedMovie(movie.title) }}>
            {movie.title}
          </a>
        </span>
        <br />
        <span>
          {movie.comment}
        </span>
        <br />
        <br />
      </div>
    ))
  })

  return components;
}

const App = (props) => {

  // Define States
  const [movieState, setMoviewState] = useState({
    title: '',
    image: '',
    comment: '',
  })

  // onChange reusable function
  const onFieldChange = (e) => {
    const { name, value } = e.target
    setMoviewState({
      ...movieState,
      [name]: value
    })

  }
  return (
    <div className="App">
      <h1>Codest Movies!</h1>
      <h1>Add movie!</h1>
      <b>TITLE:<br /><input type="text" name="title" onChange={(e) => onFieldChange(e)} /></b><br />
      <b>IMAGE URL:<br /><input type="text" name="image" onChange={(e) => onFieldChange(e)} /></b><br />
      <b>COMMENT:<br /><input type="text" name="comment" onChange={(e) => onFieldChange(e)} /></b><br />
      <input type="button" onClick={(e) => add(movieState)} value="ADD MOVIE" />

      <h1>Watchlist:</h1>
      {getMoviesComponents(getAllMovies())}

      <h1>Already watched:</h1>
      {getWatchedMoviesComponents(getWatchedMovies())}
    </div>
  );
}

export default App;
