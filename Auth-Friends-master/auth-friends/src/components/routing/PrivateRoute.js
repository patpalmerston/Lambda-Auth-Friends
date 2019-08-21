import React from 'react';
import { Route, Redirect } from 'react-router';

// A Private Route which will allow us to  redirect users who are not logged in to the login in page and also hide any component it is applied to until user is logged in.
const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props => {
				if (localStorage.getItem('token')) {
					return <Component {...props} />;
				}
				return <Redirect to='/login' />;
			}}
		/>
	);
};

export default PrivateRoute;
