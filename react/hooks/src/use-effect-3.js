/*
	source: https://www.udemy.com/course/pro-react-redux/learn/lecture/17163718
	stack: create-react-app, react, hooks (useState, useEffect)
	start ---> npm run start
*/

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	const [ value, setValue ] = useState(1);
	const [ visible, setVisible ] = useState(true);

	if (visible) {
		return (
			<div>
				<button onClick={() => setValue((v) => v + 1)}>+</button>
				<button onClick={() => setVisible(false)}>hide</button>
				<PlanetInfo id={value} />
			</div>
		);
	} else {
		return <button onClick={() => setVisible(true)}>show</button>;
	}
};

const PlanetInfo = ({ id }) => {
	const [ name, setName ] = useState(null);

	useEffect(() => {
		let cancelled = false;
		fetch(`https://swapi.dev/api/planets/${id}`)
			.then(res => res.json())
			.then(data => {
				if (!cancelled) {
					setName(data.name);
				}
			});
		return () => {
			cancelled = true;
		}
	}, [ id ]);

	return (
		<div>{id} - {name ? name : 'Planet Name'}</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
