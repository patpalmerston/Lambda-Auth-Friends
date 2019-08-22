import React, { Fragment, useContext } from 'react';
import FriendContext from '../../context/friend/friendContext';

const FriendCard = ({ friend }) => {
	const friendContext = useContext(FriendContext);
	const { deleteFriend } = friendContext;
	const { id, name, age, email } = friend;

	const onDelete = () => {
		deleteFriend(id);
	};
	return (
		<Fragment>
			<h2>{name}</h2>
			<h4>{age}</h4>
			<h4>{email}</h4>
			<button onClick={onDelete}>Delete</button>
		</Fragment>
	);
};

export default FriendCard;
