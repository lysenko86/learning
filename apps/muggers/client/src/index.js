/*
	source: https://www.youtube.com/watch?v=bCIUkQoKdgI&list=PLevjgbzdU8UwZbQbiPR4GQcwdkNxDUeUc&index=8
	stack: react, redux, react-redux, redux-thunk, redux-devtools-extension
	start ---> npm start

	source of react: https://www.youtube.com/watch?v=kOFdpM7MNDc&list=PLevjgbzdU8UxfbRrLb_ILGXRAHbeJT7w2
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
document.getElementById('root'));
