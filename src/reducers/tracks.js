
export default function tracksReducer (state = [], action) {
	if (action.type === 'ADD_TRACK') {
		return [...state, action.newTrack]
	} else if (action.type === 'REMOVE_ALL_TRACKS') {
		return [];
	}

	return state;
}