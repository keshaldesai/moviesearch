import { FETCH_MOVIE, MOVIE_SEARCH } from '../actions/index';

const INITIAL_STATE = { movie: null, term: '' };

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_MOVIE:
			return {
				...state, movie: action.payload.data
			};
		case MOVIE_SEARCH:
			console.log(action);
			return {
				...state, term: action.payload
			};
		default:
			return state;
	}
}