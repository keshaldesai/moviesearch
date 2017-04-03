import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions/index';

class Movie extends Component {
	componentWillMount() {
		this.props.fetchMovie();
	}

	puke() {
		return <div>{JSON.stringify(this.props.movies)}</div>
	}

	render() {
		return (
			<div>
				{this.puke()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		movies: state.movies.movie
	}
}

export default connect(mapStateToProps, { fetchMovie })(Movie);
