import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movieSearch } from '../actions/index';

class Header extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		console.log(e);
	}
	render() {
		const logo = 'https://www.themoviedb.org/assets/static_cache/27b65cb40d26f78354a4ac5abf87b2be/images/v4/logos/powered-by-rectangle-green.svg';
		return (
			<div className="header">
				<img className="logo" src={logo} alt="Powered by The Movie DB" />
				<span className="search-box">
					<i className="fa fa-search fa-2x" aria-hidden="true"></i>
					<input className="search-input" value={this.props.term} type="text" name="search" placeholder="Search Movie Title..." onChange={this.props.handleChange} autoComplete="off" />
				</span>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		term: state.movies.term
	}
}

export default connect(mapStateToProps, { movieSearch })(Header);