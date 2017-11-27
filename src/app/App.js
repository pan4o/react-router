import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

	addTrack() {
		this.props.onAddTrack(this.trackInput.value);
		this.trackInput.value = "";
	}

	removeAllTracks() {
		this.props.onRemoveAllTracks();
	}

	findTrack() {
		this.props.onFindTrack(this.findInput.value);
	}

	render() {
		return (
			<div>
				<div>
					<input type="text" ref={(input) => {this.trackInput = input}}/>
					<button onClick={this.addTrack.bind(this)}>Send</button>
				</div>
				<div>
					<input type="text" ref={(input) => {this.findInput = input}}/>
					<button onClick={this.findTrack.bind(this)}>Find track</button>
				</div>
				<ul>
					{
						this.props.tracksFromState.map((track, index) => <li key={index}>{track.name}</li>)
					}
				</ul>

				{this.props.tracksFromState.length > 0 && <button onClick={this.removeAllTracks.bind(this)}>Remove All Tracks</button>}
			</div>
		);
	}
}

// tracksFromState доступна для работы из пропсов по этой переменной бегает цикл в доме
// state.tracks берется из глобального редьюсера ./reducers/index.js
// track текущий обьект (обычный параметр в цикле, может называть как угодно)
// state,filterTracks берется из глобального редьюсера ./reducers/index.js

export default connect(
	state => ({
		tracksFromState: state.tracks.filter(track => track.name.includes(state.filterTracks))
	}),
	dispatch => ({

		onAddTrack: (name) => {

			const trackObject = {
				id: Date.now().toString(),
				name: name
			}

			dispatch({
				type: 'ADD_TRACK',
				track: trackObject
			});

		},

		onRemoveAllTracks: () => {

			dispatch({
				type: 'REMOVE_ALL_TRACKS'
			});

		},

		onFindTrack: (name) => {

			dispatch({
				type: 'FIND_TRACK',
				track: name
			});

		}

	})
)(App);