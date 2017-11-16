
export default function tracks (state = [], action) {
	if (action.type === 'ADD_TRACK') {
		return [...state, action.newTrack]
	} else if (action.type === 'DELETE_TRACK') {
		return state;
	}

	return state;
}