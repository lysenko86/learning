/*
<body>
	<div id="root" class="jumbotron">
		<h2 id="counter">0</h2>
		<button id="dec" class="btn btn-primary btn-large">DEC</button>
		<button id="inc" class="btn btn-primary btn-large">INC</button>
		<button id="rnd" class="btn btn-primary btn-large">RND</button>
	</div>
</body>
*/

// payload - типове ім'я для додаткових параметрів, які ми передаємо разом з action
// actionCreator - проста ф-ця для створення об'єкту action - спрощує код

import { createStore } from 'redux';

const reducer = (state=0, action) => {
	switch (action.type) {
		case 'RND':
			return state + action.payload;

		case 'INC':
			return state + 1;

		case 'DEC':
			return state - 1;

		default:
			return state;
	}
};

const store = createStore(reducer);

const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const rnd = (payload) => ({ type: 'RND', payload });

document.getElementById('inc').addEventListener('click', () => {
	store.dispatch(inc());
});

document.getElementById('dec').addEventListener('click', () => {
	store.dispatch(dec());
});

document.getElementById('rnd').addEventListener('click', () => {
	const payload = Math.floor(Math.random()*10);
	store.dispatch(rnd(payload));
});

const update = () => {
	document.getElementById('counter').innerHTML = store.getState();
};

store.subscribe(update);
