import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';
import Home from './home/Home';
import Topics from './topics/Topics';
import Topic from './topic/Topic';

function keepState(state = [], action) {
	if (action.type === 'ADD_TRACK') {
		return [
			...state,
			action.trackName
		];
	}
	return state;
}

const store = createStore(keepState);

const addBtn = document.querySelectorAll('.add')[0];
const trackInput = document.querySelectorAll('.field')[0];
const list = document.querySelectorAll('.list')[0];

store.subscribe(() => {
	list.innerHTML = '';
	trackInput.value = '';
	store.getState().forEach(track => {
		const li = document.createElement('li');
		li.textContent = track;
		list.appendChild(li);
	});
});

addBtn.addEventListener('click',() => {
	const trackName = trackInput.value;
	store.dispatch({
		type: 'ADD_TRACK',
		trackName: trackName
	});

});










ReactDOM.render(
	<Router>
		<div>
			<p><Link to="/">Homepage</Link></p>
			<p><Link to="/topics">All Posts</Link></p>
			<p><Link to="/topic">Post</Link></p>

			<Route exact path="/" component={Home}/>
			<Route exact path="/topics" component={Topics}/>
			<Route exact path="/topic" component={Topic}/>
		</div>
	</Router>,
	document.getElementById('root')
);
