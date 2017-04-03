import React from 'react';
import Header from './components/Header';
import Movie from './components/Movie';
import Footer from './components/Footer';

function App() {
	return (
		<div className="container">
			<Header />
			<Movie />
			<Footer />
		</div>
	);
}

export default App;