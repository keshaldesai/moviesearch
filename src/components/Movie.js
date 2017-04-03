import React, { Component } from 'react';

class Movie extends Component {
	render() {
		if (!this.props.movies) {
			return <div>Loading...</div>;
		}
		const { movies } = this.props;
		const posterUrl = `https://image.tmdb.org/t/p/w640${movies.poster_path}`
		return (
			<div className="shell">
				<div className="poster"><img src={posterUrl} alt="Movie Poster" /></div>
				<div className="info">
					<div className="title"><h1>{movies.original_title}</h1></div>
					<div className="tagline"><h2>{movies.tagline}</h2></div>
					<div className="overview">{movies.overview}</div>
					<div className="stats">
					</div>
				</div>
			</div>
		);
	}
}



export default Movie;
