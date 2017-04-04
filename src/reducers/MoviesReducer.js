import { FETCH_MOVIE } from '../actions/index';

const INITIAL_STATE = { movie: null };

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_MOVIE:
			return {
				...state, movie: action.payload.data
			};
		default:
			return state;
	}
}