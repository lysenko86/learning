/*
	source: https://codesandbox.io/s/m7oq9n75z8?file=/src/index.js
	заміна componentDidUpdate(prevProps) з попередніми значеннями пропсів на хуки
*/

import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const Comp1 = (props) => {
	useEffect(() => { // спочатку стартуєм хук, який спрацьовує кожного разу після рендеру комопненти
		console.log('componentDidUpdate()');
		console.log('prevProps = ', prevProps.current);
		console.log('currentProps = ', props);
	});
	const prevProps = useRef(); // юзаєм useRef щоб зберегти старі значення
	useEffect(() => {
		prevProps.current = props;  // сетаємо поточні значення, які наступного разу при виклику useEffect після рендеру вже будуть минулими
	});
	return <div>{props.title}</div>;
}

const App = () => {
	const [ value, setValue ] = useState(0);

	useEffect(() => {
		console.log('componentDidMount()');
		const timeout = setInterval(() => {
			setValue(value => value + 1);
		}, 1000);
		return () => {
			console.log('componentWillUnmount()');
			return () => clearTimeout(timeout);
		}
	}, []);

	return (
		<div>
			<div>PARENT COMPONENT</div>
			<Comp1 title={value} />
		</div>
	)
};

ReactDOM.render(<App />, document.getElementById('root'));
