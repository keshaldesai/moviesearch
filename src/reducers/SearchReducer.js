import { MOVIE_SEARCH, MOVIE_QUERY, CLEAR_ALL } from '../actions/index';

const INITIAL_STATE = { value: '', searchList: [] };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case MOVIE_SEARCH:
            return {
                ...state, value: action.payload
            };
        case MOVIE_QUERY:
            return {
                ...state, searchList: action.payload.data.results
            };
        case CLEAR_ALL:
            return {
                ...state, ...INITIAL_STATE
            };
        default:
            return state;
    }
}