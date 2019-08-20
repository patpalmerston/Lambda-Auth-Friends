import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/auth/Login'
import Home from './components/pages/Home';
import PrivateRoute from './components/routing/PrivateRoute';

import './App.css';

function App() {
	return(

	<Router>
		<Fragment>
			<div className='App'>
        <Switch>
        <PrivateRoute exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />

        </Switch>
      </div>;
		</Fragment>
	</Router>
  )
}

export default App;
