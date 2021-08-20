import { all } from 'redux-saga/effects';

import usersSagas from './users-sagas';
import employeesSagas from './employees-sagas';

export default function* rootSaga() {
	yield all([
		...usersSagas,
		...employeesSagas
	]);
};
