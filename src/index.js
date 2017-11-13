import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './app/App';

const initialState = [
	'Smells like teen spirit',
	'Killing in the name'
];

function keepState(state = initialState, action) {
	if (action.type === 'ADD_TRACK') {
		return [...state, action.trackName];
	}

	return state;
}

const store = createStore(keepState);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
