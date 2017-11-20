
const initialState = [];

export default function tracksReducer (state = initialState, action) {

	if (action.type === 'ADD_TRACK') {

		let updatedState = [...state, action.track];

		console.log(updatedState);

		return updatedState;

	} else if (action.type === 'REMOVE_ALL_TRACKS') {

		return [];

	}

	return state;
}