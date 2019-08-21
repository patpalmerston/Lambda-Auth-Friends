import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/auth/Login';
import Home from './components/pages/Home';
import PrivateRoute from './components/routing/PrivateRoute';

import AuthState from './context/auth/AuthState';
import FriendState from './context/friend/FriendState';
import { axiosWithAuth } from './utils/axiosWithAuth';

import './App.css';

if (localStorage.token) {
	axiosWithAuth();
}

function App() {
	return (
		<AuthState>
			<FriendState>
				<Router>
					<Fragment>
						<div className='App'>
							<Switch>
								<PrivateRoute exact path='/' component={Home} />
								<Route exact path='/login' component={Login} />
							</Switch>
						</div>
						;
					</Fragment>
				</Router>
			</FriendState>
		</AuthState>
	);
}

export default App;
