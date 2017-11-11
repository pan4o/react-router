
import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
	render () {
		return (
			<div>
				<p>Home Page</p>
				<p><Link to="/topics">Topics</Link></p>
			</div>
		);
	}
}

export default Home;