import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ErrorBoundary from './error-boundary';
import NavBar from '../containers/nav-bar/';
import Routes from './routes';
import Alert from './alert';

const App = () => (
	<ErrorBoundary>
		<BrowserRouter>
			<NavBar />
			<Alert />
			<div className="container pt-5">
				<Routes />
			</div>
		</BrowserRouter>
	</ErrorBoundary>
);

export default App;
