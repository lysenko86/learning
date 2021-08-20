/*
	Мінімальний канонічний вигляд функції редюсера
	Правила:
		- reducer - це звичайна ф-ція, яка вертає новий state
		- action обов'язково має мати пропертю type
		- якщо reducer має ініцювати state - то першим параметром слід передати undefined
		- якщо відповідного action в switch немає - ми маємо віддати існуючий (default) state без змін
*/

const reducer = (state=0, action) => {
	switch (action.type) {
		case 'INC':
			return state + 1;

		default:
			return state;
	}
};

let state = reducer(undefined, {});

state = reducer(state, { type: 'INC' });
console.log(state);

state = reducer(state, { type: 'INC' });
console.log(state);
