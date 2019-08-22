import React, { useState, useEffect, useContext } from 'react';

import FriendContext from '../../context/friend/friendContext';

const FriendForm = () => {
	const friendContext = useContext(FriendContext);

	const { addFriends, clearCurrent, updateFriend, current } = friendContext;

	useEffect(() => {
		if(current !== null) {
			setUser(current)
		} else {

			setUser({
				name: '',
				email: '',
				age: ''
			});
		}
	}, [friendContext, current]);

	const [user, setUser] = useState({
		name: '',
		email: '',
		age: ''
	});

	const { name, email, age } = user;

	const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		if(current === null) {

			addFriends(user);
		} else {
			updateFriend(user)
		}

		setUser({
			name: '',
			email: '',
			age: ''
		});
	};

	const clearAll = () => {
		clearCurrent();
	}

	return (
		<form onSubmit={onSubmit}>
			<h2>{current ? 'Edit Contact' : 'Add Contact'}</h2>
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
			<button>{current ? 'Edit Contact' : 'Add Friend'}</button>
			{current && <button onClick={clearAll}>Clear</button>}
		</form>
	);
};

export default FriendForm;
