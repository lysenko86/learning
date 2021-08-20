/*
	source: https://www.youtube.com/watch?v=V1rhxheJg4A
	stack: firebase, firebase-tools,
		yarn, axios, react, react-dom, react-router-dom, node-sass, bootstrap, react-transition-group
		hooks (useState, useContext, useReducer, useEffect)
	npm install -g nodemon
	start ---> nodemon index.js
	it works on: https://todolist-hooks-31dc9.web.app/
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
