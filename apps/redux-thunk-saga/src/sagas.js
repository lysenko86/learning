import { takeEvery, put, call } from 'redux-saga/effects';

import { LOAD_DATA, putData } from './actions';

function fetchData() {
	return fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then(response => response.json());
};

function* workerLoadData() {
	const data = yield call(fetchData);
	yield put(putData(data));
};

export function* watchLoadData() {
	yield takeEvery(LOAD_DATA, workerLoadData);
};



/*

import rootSaga from './sagas';
const sagaMiddleware = createSagaMiddleware();
sagaMiddleware.run(rootSaga);

https://github.com/maprihoda/react-redux-crud/blob/master/client/src/sagas/index.js
}



import { all } from 'redux-saga/effects';
import authSaga from './auth';

export default function* rootSaga() {
	yield all([
		authSaga(),
	]);
}




*/
