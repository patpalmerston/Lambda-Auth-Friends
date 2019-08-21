import React, { useReducer } from 'react';
import axios from 'axios';

import FriendContext from './friendContext';
import friendReducer from './friendReducer';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import {
	GET_FRIENDS,
	ADD_FRIEND,
	DELETE_FRIEND,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CURRENT,
	FILTER_FRIENDS,
	CLEAR_FRIENDS,
	FRIEND_ERROR,
	CLEAR_FILTER
} from '../type.js';

const FriendState = props => {
	const initialState = {
		friends: null,
		current: null,
		filtered: null,
		error: null
	};

	const [state, dispatch] = useReducer(friendReducer, initialState);

	// Get Friends
	const getFriends = async () => {
		try {
			const res = await axios.get('http://localhost:5000/api/friends');
			console.log('state', res);
			dispatch({
				type: GET_FRIENDS,
				payload: res.data
			});
		} catch (err) {
			dispatch({
				type: FRIEND_ERROR,
				payload: err.response.msg
			});
		}
	};

	return (
		<FriendContext.Provider
			value={{
				friends: state.friends,
				current: state.current,
				filtered: state.filtered,
				error: state.error,
				getFriends
			}}
		>
			{props.children}
		</FriendContext.Provider>
	);
};

export default FriendState;
