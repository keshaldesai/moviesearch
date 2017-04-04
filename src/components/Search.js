import React, { Component } from 'react';
import { movieSearch, movieQuery, clear, fetchMovie } from '../actions/index';
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';

function getSuggestionValue(suggestion) {
	return suggestion.id;
}

function renderSuggestion(suggestion) {
	return (
		<div className="suggestion">
			<img className="thumbnail" src={suggestion.poster_path ? "https://image.tmdb.org/t/p/w640" + suggestion.poster_path : "http://www.novelupdates.com/img/noimagefound.jpg"} alt="poster" />
			<span className="suggestion-title">{suggestion.title}</span>
		</div>
	);
}

class Search extends Component {
	constructor(props) {
		super(props);
		this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
		this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
	}
	onSuggestionsFetchRequested({ value }) {
		this.props.dispatch(movieQuery(value));
	}
	onSuggestionsClearRequested() {
		this.props.dispatch(clear());
	}
	onChange = (event, { newValue }) => {
		this.props.dispatch(movieSearch(newValue))
	};
	onSuggestionSelected(event, { suggestionValue }) {
		this.props.dispatch(fetchMovie(suggestionValue));
	}
	render() {
		const inputProps = {
			placeholder: 'Search for a movie...',
			value: this.props.term,
			onChange: this.onChange
		};

		return (
			<div className="search-container">
				<Autosuggest
					suggestions={this.props.suggestions.slice(0, 5)}
					onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
					onSuggestionsClearRequested={this.onSuggestionsClearRequested}
					onSuggestionSelected={this.onSuggestionSelected}
					getSuggestionValue={getSuggestionValue}
					renderSuggestion={renderSuggestion}
					inputProps={inputProps}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		term: state.term.value,
		suggestions: state.term.searchList
	}
}

export default connect(mapStateToProps)(Search);