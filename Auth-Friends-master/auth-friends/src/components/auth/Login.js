import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

const Login = props => {
	const authContext = useContext(AuthContext);

	const { login, isAuthenticated } = authContext;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/');
		}
	}, [isAuthenticated, props.history]);

	const [user, setUser] = useState({
		username: '',
		password: ''
	});

	const { username, password } = user;

	const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

	// console.log('target', login());

	const onSubmit = e => {
		e.preventDefault();
		login({ username, password });
	};

	return (
		<div className='form-container'>
			<h1>User Login</h1>
			<form onSubmit={onSubmit}>
				<div>
					<label htmlFor='username'> Username </label>
					<input
						type='username'
						name='username'
						value={username}
						onChange={onChange}
						required
					/>
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						value={password}
						onChange={onChange}
						required
					/>
					<button>Submit</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
