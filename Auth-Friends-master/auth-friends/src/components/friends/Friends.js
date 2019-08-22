import React, { Fragment, useContext, useEffect } from 'react';
import FriendCard from './FriendCard';
import Spinner from '../layout/Spinner';
import FriendContext from '../../context/friend/friendContext';

const Friends = () => {
	const friendContext = useContext(FriendContext);
	const { friends, getFriends, loading } = friendContext;

	useEffect(() => {
		getFriends();
	}, []);

	return (
		<Fragment>
			{/* {friends !== null && !loading ? (
				friends.map(friend => <FriendCard friend={friend} />)
			) : (
				<Spinner />
			)} */}

			{friends && !loading ? (
				friends.map(friend => <FriendCard friend={friend} key={friend.id} />)
			) : (
				<Spinner />
			)}
		</Fragment>
	);
};

export default Friends;
