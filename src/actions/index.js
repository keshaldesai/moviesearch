import axios from 'axios';

export const FETCH_MOVIE = 'FETCH_MOVIE';
export const MOVIE_SEARCH = 'MOVIE_SEARCH';
export const MOVIE_QUERY = 'MOVIE_QUERY';
export const CLEAR_ALL = 'CLEAR_ALL';

const API_KEY = 'f7a6b4be5b81c46de9945d56e3165355';
const URL = 'https://api.themoviedb.org/3/';

export function fetchMovie(movie) {
	const request = axios.get(`${URL}movie/${movie}?api_key=${API_KEY}`);
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

export function movieQuery(term = '') {
	const request = axios.get(`${URL}search/movie?api_key=${API_KEY}&language=en-US&query=${term}&include_adult=false&region=US`);
	return {
		type: MOVIE_QUERY,
		payload: request
	};
}

export function clear() {
	return {
		type: CLEAR_ALL
	}
}

// take first input, search it, return array, provide it to autocomplete
// https://api.themoviedb.org/3/search/movie?api_key=###&query=###