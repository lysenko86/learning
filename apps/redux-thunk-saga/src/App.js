import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { Connected } from './Connected';
import { reducer } from './reducers';
import { watchLoadData } from './sagas';

const App = () => {
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(reducer, applyMiddleware(logger, /*thunk,*/ sagaMiddleware));
	sagaMiddleware.run(watchLoadData);

	return (
		<Provider store={store}>
			<Connected />
		</Provider>
	);
}

export default App;
