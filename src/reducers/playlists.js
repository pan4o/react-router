const initState = ['My work playlist', 'My home playlist']

export default function playlists (state = initState, action) {
	if (action.type === 'ADD_PLAYLIST') {
		return [...state, action.newPlaylist]
	} else if (action.type === 'DELETE_PLAYLIST') {
		return state;
	}

	return state;
}