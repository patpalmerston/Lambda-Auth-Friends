import React, {useState} from 'react';

const FriendForm = () => {


	const [user, setUser] = useState({
		name: '',
		email: '',
		age: ''
	})

	return(
		<form onSubmit={null}>
			<input type="text" name='name' value={null} onChange={null} />
			<input type="text" name='email' value={null} onChange={null} />
			<input type="text" name='age' value={null} onChange={null} />
			<button>Add Friend</button>
		</form>
	);
};

export default FriendForm;
