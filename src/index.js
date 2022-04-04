import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import movieData from './movieData.json'

export const getWatchedMovies = () => {
	const movies = localStorage.getItem('movies-watched');

	if (!movies) {
		return [];
	}
	return JSON.parse(movies);
}

export const getAllMovies = () => {
	const movies = localStorage.getItem('movies-all');

	if (!movies) {
		return movieData;
	}
	return JSON.parse(movies);

}

export const add = (data) => {

	var movies = getAllMovies();

	// Add duplicate list check
	if (!movies.find(({title}) => title === data.title)) { 
		movies.push(data);
	  }

	localStorage.setItem('movies-all', JSON.stringify(movies));

	render();
}

export function addWatchedMovie(title, description, image) {
	var movie = {};
	movie.title = title;
	movie.description = description;
	movie.image = image;

	var movies = getWatchedMovies();
	movies.push(movie);

	localStorage.setItem('movies-watched', JSON.stringify(movies));

	render();
}

export function removeWatchedMovie(title) {
	var movies = getWatchedMovies();

	for (var i = 0; i < movies.length; i++) {
		if (!movies[i]) continue;
		if (movies[i].title == title) {
			movies[i] = null
		}
	}

	localStorage.setItem('movies-watched', JSON.stringify(movies));

	render();
}

function render() {
	ReactDOM.render(<App movies={getAllMovies()} watched={getWatchedMovies()} />, document.getElementById('root'))
}

render();
