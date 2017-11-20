
const initialState = '';

export default function filterTracks (state = initialState, action) {

	if (action.type === 'FIND_TRACK') {

		let updatedState = action.track;

		console.log(updatedState)

		return updatedState;

	}

	return state;
}