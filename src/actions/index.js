import axios from 'axios';

export const FETCH_MOVIE = 'FETCH_MOVIE';

const API_KEY = 'f7a6b4be5b81c46de9945d56e3165355';

export function fetchMovie() {
	const request = axios.get(`https://api.themoviedb.org/3/movie/157336?api_key=${API_KEY}`);
	return {
		type: FETCH_MOVIE,
		payload: request
	};
}