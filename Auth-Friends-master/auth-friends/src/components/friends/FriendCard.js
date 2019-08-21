import React, { Fragment } from 'react';

const FriendCard = ({ friend }) => {
	const { name, age, email } = friend;
	return (
		<Fragment>
			<h2>{name}</h2>
			<h4>{age}</h4>
			<h4>{email}</h4>
			<button>Delete</button>
		</Fragment>
	);
};

export default FriendCard;
