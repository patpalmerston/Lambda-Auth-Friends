import React, { useState, useEffect, useContext } from 'react';

import FriendContext from '../../context/friend/friendContext';

const FriendForm = () => {
	const friendContext = useContext(FriendContext);

	const { addFriends } = friendContext;

	useEffect(() => {
		setUser({
			name: '',
			email: '',
			age: ''
		});
	}, [friendContext]);

	const [user, setUser] = useState({
		name: '',
		email: '',
		age: ''
	});

	const { name, email, age } = user;

	const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		addFriends(user);

		setUser({
			name: '',
			email: '',
			age: ''
		});
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type='text'
				name='name'
				placeholder='name'
				value={name}
				onChange={onChange}
			/>
			<input
				type='text'
				name='email'
				placeholder='email'
				value={email}
				onChange={onChange}
			/>
			<input
				type='text'
				name='age'
				placeholder='age'
				value={age}
				onChange={onChange}
			/>
			<button>Add Friend</button>
		</form>
	);
};

export default FriendForm;
