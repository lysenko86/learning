/*
	source: https://www.udemy.com/course/pro-react-redux/learn/lecture/17163718
	stack: create-react-app, react, hooks (useContext)
	start ---> npm run start
*/

import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

const MyContext = React.createContext();

const App = () => {
	return (
		<MyContext.Provider value="Hello World 123">
			<Child_1 />
			<Child_2 />
		</MyContext.Provider>
	);
};

const Child_1 = () => {
	return (
		<MyContext.Consumer>
			{
				(value) => {
					return (
						<p>{value}</p>
					);
				}
			}
		</MyContext.Consumer>
	);
};

const Child_2 = () => {
	const value = useContext(MyContext);
	return <p>{value}</p>;
};

ReactDOM.render(<App />, document.getElementById('root'));
