import React, { Fragment } from 'react';

const FriendCard = ({ name, age, email }) => {
	return (
		<Fragment>
			<h2>{name}</h2>
			<h4>{age}</h4>
			<h4>{email}</h4>
		</Fragment>
	);
};

export default FriendCard;
