/*
	source: https://www.youtube.com/watch?v=lAtEXmJJFoY&list=PLevjgbzdU8UxfbRrLb_ILGXRAHbeJT7w2&index=14
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
