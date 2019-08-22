import React, { useReducer } from 'react';
import axios from 'axios';

import FriendContext from './friendContext';
import friendReducer from './friendReducer';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import {
	GET_FRIENDS,
	ADD_FRIEND,
	// DELETE_FRIEND,
	// SET_CURRENT,
	// CLEAR_CURRENT,
	// UPDATE_CURRENT,
	// FILTER_FRIENDS,
	// CLEAR_FRIENDS,
	FRIEND_ERROR,
	DELETE_FRIEND
	// CLEAR_FILTER
} from '../type.js';

const FriendState = props => {
	const initialState = {
		friends: [],
		current: null,
		filtered: null,
		error: null
	};

	const [state, dispatch] = useReducer(friendReducer, initialState);

	// Get Friends
	const getFriends = async () => {
		try {
			const res = await axiosWithAuth().get(
				'http://localhost:5000/api/friends'
			);

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

	// Add Friends
	const addFriends = async friend => {
		try {
			const res = await axiosWithAuth().post(
				'http://localhost:5000/api/friends',
				friend
			);
			getFriends();
			dispatch({
				type: ADD_FRIEND,
				payload: res.data
			});
		} catch (err) {
			dispatch({
				type: FRIEND_ERROR,
				payload: err.response.msg
			});
		}
	};

	// Delete Friend
	const deleteFriend = async id => {
		try {
			await axiosWithAuth().delete(`http://localhost:5000/api/friends/${id}`);

			dispatch({
				type: DELETE_FRIEND,
				payload: id
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
				getFriends,
				addFriends,
				deleteFriend
			}}
		>
			{props.children}
		</FriendContext.Provider>
	);
};

export default FriendState;
