import axios from 'axios';

export const FETCH_MOVIE = 'FETCH_MOVIE';
export const MOVIE_SEARCH = 'MOVIE_SEARCH';

const API_KEY = 'f7a6b4be5b81c46de9945d56e3165355';

export function fetchMovie(movie) {
	const request = axios.get(`https://api.themoviedb.org/3/movie/${movie}?api_key=${API_KEY}`);
	return {
		type: FETCH_MOVIE,
		payload: request
	};
}

export function movieSearch(val) {
	return {
		type: MOVIE_SEARCH,
		payload: val
	};
}

// take first input, search it, return array, provide it to autocomplete
// https://api.themoviedb.org/3/search/movie?api_key=###&query=###