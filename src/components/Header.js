import React, { Component } from 'react';
import { movieSearch } from '../actions/index';
import { connect } from 'react-redux';

class Header extends Component {
	handleChange(e) {
		this.props.dispatch(movieSearch(e.target.value));
	}
	render() {
		const logo = 'https://www.themoviedb.org/assets/static_cache/27b65cb40d26f78354a4ac5abf87b2be/images/v4/logos/powered-by-rectangle-green.svg';
		return (
			<div className="header">
				<img className="logo" src={logo} alt="Powered by The Movie DB" />
				<span className="search-box">
					<i className="fa fa-search fa-2x" aria-hidden="true"></i>
					<input className="search-input" value={this.props.term} type="text" placeholder="Search Movie Title..." onChange={this.handleChange.bind(this)} autoComplete="off" />
				</span>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		term: state.term.value
	}
}

export default connect(mapStateToProps)(Header);