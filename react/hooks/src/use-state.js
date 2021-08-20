/*
	source: https://www.udemy.com/course/pro-react-redux/learn/lecture/17163718
	stack: create-react-app, react, hooks (useState)
	start ---> npm run start
*/

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	return (
		<div>
			<HookSwitcher />
		</div>
	);
};

const HookSwitcher = () => {
	const [ color, setColor ] = useState('gray');
	const [ fontSize, setFontSize ] = useState(14);
	return (
		<div style={{
			padding: '10px',
			backgroundColor: color,
			fontSize: `${fontSize}px`
		}}>
			<div>Hello, world</div>
			<button onClick={() => setColor('gray')}>Dark</button>
			<button onClick={() => setColor('white')}>Light</button>
			<button onClick={() => setFontSize((s) => s + 2)}>Bigger Font</button>
			<button onClick={() => setFontSize((s) => s - 2)}>Smaller Font</button>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
