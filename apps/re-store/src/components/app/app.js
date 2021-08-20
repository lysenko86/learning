import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';
import ErrorIndicator from '../error-indicator';
import './app.css';

const App = () => {
	return (
		<main role="main" className="container">
			<ShopHeader numItems={5} total={210} />
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/cart" component={CartPage} />
				<Route render={({ location }) => {
					const errorText = `"${location.pathname}" - is unknown URL address.`;
					return <ErrorIndicator text={errorText} />;
				}}></Route>
			</Switch>
		</main>
	);
};

export default App;
