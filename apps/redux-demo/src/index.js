/*
	source: https://www.youtube.com/watch?v=YdYyYMFPa44
	same source: https://monsterlessons.com/project/series/redux-js-dlya-nachinayushih
	stack: webpack, redux, redux-thunk, redux-logger, redux-devtools-extension
	start ---> npm start
*/

//import { createStore } from './createStore';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './redux/rootReducer';
import { increment, decrement, asyncIncrement, changeTheme } from './redux/actions';
import './styles.css';

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

// const store = createStore(
// 	rootReducer,
// 	compose(
// 		applyMiddleware(thunk, logger),
// 		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// 	)
// );

const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunk, logger)
	)
);

addBtn.addEventListener('click', () => {
	store.dispatch(increment());
});

subBtn.addEventListener('click', () => {
	store.dispatch(decrement());
});

asyncBtn.addEventListener('click', () => {
	store.dispatch(asyncIncrement());
});

themeBtn.addEventListener('click', () => {
	const newTheme = document.body.classList.contains('light') ? 'dark' : 'light';
	store.dispatch(changeTheme(newTheme));
});

store.subscribe(() => {
	const state = store.getState();
	counter.textContent = state.counter;
	document.body.className = state.theme.value;

	[addBtn, subBtn, themeBtn, asyncBtn].forEach(btn => btn.disabled = state.theme.disabled);
});
store.dispatch({ type: 'INIT_APPLICATION' });
