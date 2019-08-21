import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axiosWithAuth from '../../utils/axiosWithAuth';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../type.js';

const AuthState = props => {
	const initialState = {
		token: localStorage.getItem('token'),
		isAuthenticated: null,
		loading: true,
		user: null,
		error: null
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	// Login User
	const login = async formData => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		try {
			const res = await axios.post('http://localhost:5000/api/login', formData, config);
			console.log('AuthState login prop', formData);
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data
			});
		} catch (err) {
			dispatch({
				type: LOGIN_FAIL,
				payload: err.response.data.msg
			});
		}
	};

	// logout
	const logout = () => dispatch({ type: LOGOUT });

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				user: state.user,
				error: state.error,
				login,
				logout
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
