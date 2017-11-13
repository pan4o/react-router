import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

/*my components*/
import Home from '../home/Home';
import Topics from '../topics/Topics';
import Topic from '../topic/Topic';

class App extends Component {
	render() {
		console.log(this.props.testStore);

		return (
			<div>
				<Router>
					<div>
						<p><Link to="/">Homepage</Link></p>
						<p><Link to="/topics">All Posts</Link></p>
						<p><Link to="/topic">Post</Link></p>

						<Route exact path="/" component={Home}/>
						<Route exact path="/topics" component={Topics}/>
						<Route exact path="/topic" component={Topic}/>
					</div>
				</Router>

				<input type="text" />
				<button>Send</button>
				<ul>
					{
						this.props.testStore.map((track, index) => <li key={index}>{track}</li>)
					}
				</ul>
			</div>
		);
	}
}

export default connect(
	state => ({
		testStore: state
	}),
	dispatch => ({})
)(App);