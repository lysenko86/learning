/*
	Використувуючи redux створюємо store, він має такі методи:
		- store.dispatch() - виконати якусь дію
		- store.getState() - отримати поточний state
		- store.subscribe() - підписатись на зміну стейту
*/
import { createStore } from 'redux';

const reducer = (state=0, action) => {
	switch (action.type) {
		case 'INC':
			return state + 1;

		default:
			return state;
	}
};

const store = createStore(reducer);
store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch({ type: 'INC' });
store.dispatch({ type: 'INC' });
