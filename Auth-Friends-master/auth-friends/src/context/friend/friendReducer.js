import {
	GET_FRIENDS,
	ADD_FRIEND,
	DELETE_FRIEND,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CURRENT,
	// FILTER_FRIENDS,
	CLEAR_FRIENDS,
	FRIEND_ERROR
	// CLEAR_FILTER
} from '../type.js';

export default (state, action) => {
	console.log('action', action);
	switch (action.type) {
		case GET_FRIENDS:
			return {
				...state,
				friends: action.payload,
				loading: false
			};
		case ADD_FRIEND:
			return {
				...state,
				friends: [...state.friends, action.payload],
				loading: false
			};
		case DELETE_FRIEND:
			return {
				...state,
				friends: state.friends.filter(friend => friend.id !== action.payload),
				loading: false
			};
		case CLEAR_FRIENDS:
			return {
				...state,
				friends: null,
				filtered: null,
				error: null,
				current: null
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null
			};
		case FRIEND_ERROR:
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
};
