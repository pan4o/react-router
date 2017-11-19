import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

/*my components*/
import Home from '../home/Home';
import Topics from '../topics/Topics';
import Topic from '../topic/Topic';

class App extends Component {

	addTrack() {
		this.props.onAddTrack(this.trackInput.value);
		this.trackInput.value = "";
	}

	removeAllTracks() {
		this.props.onRemoveAllTracks();
	}

	render() {
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

				<input type="text" ref={(input) => {this.trackInput = input}}/>
				<button onClick={this.addTrack.bind(this)}>Send</button>
				<ul>
					{
						this.props._tracks.map((track, index) => <li key={index}>{track}</li>)
					}
				</ul>
				{this.props._tracks.length > 0 && <button onClick={this.removeAllTracks.bind(this)}>Remove All Tracks</button>}
			</div>
		);
	}
}

export default connect(
	state => ({
		_tracks: state.tracks
	}),
	dispatch => ({
		onAddTrack: (trackName) => {
			dispatch({
				type: 'ADD_TRACK',
				newTrack: trackName
			})
		},
		onRemoveAllTracks: () => {
			dispatch({
				type: 'REMOVE_ALL_TRACKS'
			})
		}
	})
)(App);