import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../type.js';

export default (state, action) => {
	console.log('reducer action', action);
	switch (action.type) {
		case LOGIN_SUCCESS:
			localStorage.setItem('token', action.payload.token);
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				loading: false
			};

		case LOGIN_FAIL:
		case LOGOUT:
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				user: null,
				error: action.payload
			};

		default:
			return state;
	}
};
