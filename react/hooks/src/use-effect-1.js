/*
	source: https://www.udemy.com/course/pro-react-redux/learn/lecture/17163718
	stack: create-react-app, react, hooks (useState, useEffect)
	start ---> npm run start
*/

import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	const [ value, setValue ] = useState(0);
	const [ visible, setVisible ] = useState(true);

	if (visible) {
		return (
			<div>
				<button onClick={() => setValue((v) => v + 1)}>+</button>
				<button onClick={() => setVisible(false)}>hide</button>
				<HookCounter value={value} />
				<ClassCounter value={value} />
			</div>
		);
	} else {
		return <button onClick={() => setVisible(true)}>show</button>
	}
};

const HookCounter = ({ value }) => {
	useEffect(() => {
		console.log(' useEffect() ');

		return () => console.log('clear');
	}, [ value ]);
	return <p>{value}</p>
};

const HookCounter_1 = ({ value }) => {
	useEffect(() => {
		console.log('componentDidMount()');
	}, []);

	useEffect(() => {
		console.log('componentDidUpdate()');
	});

	useEffect(() => {
		return () => {
			console.log('componentWillUnmount()');
		}
	}, []);

	return <p>{value}</p>
};

const HookCounter_2 = ({ value }) => {
	useEffect(() => {
		console.log('componentDidMount()');
		return () => {
			console.log('componentWillUnmount()');
		}
	}, []);

	useEffect(() => {
		console.log('componentDidUpdate()');
	});

	return <p>{value}</p>
};

class ClassCounter extends Component {
	componentDidMount() {
		console.log('class: mount');
	}

	componentDidUpdate(props) {
		console.log('class: update');
	}

	componentWillUnmount() {
		console.log('class: unmount');
	}

	render() {
		return <p>{this.props.value}</p>
	}
};

ReactDOM.render(<App />, document.getElementById('root'));
