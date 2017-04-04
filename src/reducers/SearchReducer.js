import { MOVIE_SEARCH } from '../actions/index';

const INITIAL_STATE = { value: '' };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case MOVIE_SEARCH:
            return {
                ...state, value: action.payload
            };
        default:
            return state;
    }
}