import { MOVIE_SEARCH, MOVIE_QUERY } from '../actions/index';

const INITIAL_STATE = { value: '', searchList: [] };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case MOVIE_SEARCH:
            return {
                ...state, value: action.payload
            };
        case MOVIE_QUERY:
            console.log(action.payload.data);
            return {
                ...state, searchList: action.payload.data.results
            };
        default:
            return state;
    }
}