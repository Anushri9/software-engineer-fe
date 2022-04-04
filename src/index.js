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

	const movies = getAllMovies();

	// Add duplicate list check
	if (!movies.find(({ title }) => title === data.title)) {
		movies.push(data);
	}

	localStorage.setItem('movies-all', JSON.stringify(movies));

	render();
}

export const addWatchedMovie = (data) => {

	const movies = getWatchedMovies();

	if (!movies.find(({ title }) => title === data.title)) { // Add duplicate list check
		movies.push(data);
	}

	localStorage.setItem('movies-watched', JSON.stringify(movies));

	render();
}

export const removeWatchedMovie = (title) => {
	const movies = getWatchedMovies();

	//use filter instead of foreach
	let deletedMovie = movies.filter(movielist => movielist.title !== title)

	localStorage.setItem('movies-watched', JSON.stringify(deletedMovie));

	render();
}

const render = () => {
	ReactDOM.render(<App movies={getAllMovies()} watched={getWatchedMovies()} />, document.getElementById('root'))
}

render();
