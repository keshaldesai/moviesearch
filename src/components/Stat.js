import React from 'react';

function Stat(props) {
	return (
		<div className="stat">
			<div className="stat-title">{props.title}</div>
			<div className="stat-prop">{props.stat}</div>
		</div >
	);
}

export default Stat;