import React from 'react';

function Header() {
	const logo = 'https://www.themoviedb.org/assets/static_cache/27b65cb40d26f78354a4ac5abf87b2be/images/v4/logos/powered-by-rectangle-green.svg';
	return (
		<div className="header">
			<img className="logo" src={logo} alt="Powered by The Movie DB" />
			<span className="search-box"><i className="fa fa-search fa-2x" aria-hidden="true"></i><input className="search-input" type="text" name="search" placeholder="Search Movie Title..." autoComplete="off" /></span>
		</div>
	)
}

export default Header;