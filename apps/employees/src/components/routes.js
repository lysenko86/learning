import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthPage from '../pages/auth-page';
import EmployeesPage from '../pages/employees-page';
import WrongURL from '../pages/wrong-url-page';

const Routes = () => (
	<Switch>
		<Route path='/' exact component={AuthPage} />
		<Route path='/employees/:id?' component={EmployeesPage} />
		<Route path='*' component={WrongURL} />
	</Switch>
);

export default Routes;
