import React, { Component } from 'react';
import Header from './components/Header';
import Movie from './components/Movie';
import Footer from './components/Footer';
import { connect } from 'react-redux';
import { fetchMovie } from './actions/index';

//https://api.themoviedb.org/3/movie/157336?&api_key=cfe422613b250f702980a3bbf9e90716

class App extends Component {
	componentWillMount() {
		this.props.fetchMovie('198184');
	}
	render() {

		const bg = this.props.movies ? `url(https://image.tmdb.org/t/p/w1300_and_h730_bestv2${this.props.movies.backdrop_path})` : 'black';
		const style = {
			backgroundImage: `${bg}`
		}
		return (
			<div className="background" style={style}>
				<div className="container">
					<Header />
					<Movie movies={this.props.movies} />
					<Footer />
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		movies: state.movies.movie,
	}
}

export default connect(mapStateToProps, { fetchMovie })(App);
