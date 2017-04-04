import React, { Component } from 'react';
import Search from './Search';

class Header extends Component {
	render() {
		const logo = 'https://www.themoviedb.org/assets/static_cache/27b65cb40d26f78354a4ac5abf87b2be/images/v4/logos/powered-by-rectangle-green.svg';
		return (
			<div className="header">
				<img className="logo" src={logo} alt="Powered by The Movie DB" />
				<span className="search-box">
					<Search />
				</span>
			</div>
		);
	}
}

export default Header;