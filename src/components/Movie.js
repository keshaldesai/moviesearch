import React, { Component } from 'react';
import Stat from './Stat';

class Movie extends Component {
	render() {
		if (!this.props.movies) {
			return <div className="loader">Loading...</div>;
		}
		const { movies } = this.props;
		const posterUrl = `https://image.tmdb.org/t/p/w640${movies.poster_path}`;
		var formatter = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 0,
		});
		const boxOffice = formatter.format(movies.revenue);
		return (
			<div className="shell">
				<div className="poster"><img src={posterUrl} alt="Movie Poster" /></div>
				<div className="info">
					<div className="title">{movies.original_title}</div>
					<div className="tagline">{movies.tagline}</div>
					<div className="overview">{movies.overview}</div>
					<div className="stats">
						<Stat title="Original Release:" stat={movies.release_date} />
						<Stat title="Running Time:" stat={movies.runtime} />
						<Stat title="Box Office:" stat={boxOffice} />
						<Stat title="Vote Average:" stat={movies.vote_average + ' / 10'} />
					</div>
				</div>
			</div>
		);
	}
}



export default Movie;
