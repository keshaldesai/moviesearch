import { combineReducers } from 'redux';
import MoviesReducer from './MoviesReducer';
import SearchReducer from './SearchReducer';

const rootReducer = combineReducers({
	term: SearchReducer,
	movies: MoviesReducer
});

export default rootReducer;