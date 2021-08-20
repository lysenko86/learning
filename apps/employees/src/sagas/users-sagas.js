import { takeEvery, put, call } from 'redux-saga/effects';

import firebaseService from '../services/firebase-service';
import {
	USERS__FETCH_USER,
	USERS__FETCH_USER_REQUEST, USERS__FETCH_USER_SUCCESS, USERS__FETCH_USER_FAILURE,
	USERS__LOGOUT_USER, USERS__LOGOUT_USER_SUCCESS,
	USERS__LOGIN_USER,
	USERS__LOGIN_USER_REQUEST, USERS__LOGIN_USER_SUCCESS, USERS__LOGIN_USER_FAILURE
} from '../actions/types';
import { logoutUser, showAlert } from '../actions';



function fetchUser(token) {
	return firebaseService.usersGetByToken(token);
}

function* fetchUserWorker() {
	const token = yield localStorage.getItem('token');
	if (!token) {
		yield put(logoutUser());
	} else {
		yield put({ type: USERS__FETCH_USER_REQUEST });
		try {
			const user = yield call(fetchUser, token);
			if (!user) {
				yield put({ type: USERS__FETCH_USER_FAILURE });
				yield put(showAlert('User is not exists', 'warning'));
				yield put(logoutUser());
			} else {
				yield put({
					type: USERS__FETCH_USER_SUCCESS,
					payload: {
						login: user.login,
						username: user.username
					}
				});
			}
		} catch(err) {
			yield put({ type: USERS__FETCH_USER_FAILURE });
			yield put(showAlert(err));
		}
	}
}



function* logoutUserWorker() {
	yield localStorage.removeItem('token');
	yield put({ type: USERS__LOGOUT_USER_SUCCESS });
}



function loginUser({ login, password }) {
	return firebaseService.usersGetByLoginPassword(login, password);
}

function* loginUserWorker({ payload }) {
	yield put({ type: USERS__LOGIN_USER_REQUEST });
	try {
		const user = yield call(loginUser, payload);
		if (!user) {
			yield put({ type: USERS__LOGIN_USER_FAILURE });
			yield put(showAlert('Wrong login or password, or user is not exists', 'warning'));
		} else {
			yield localStorage.setItem('token', user.token);
			yield put({
				type: USERS__LOGIN_USER_SUCCESS,
				payload: {
					login: user.login,
					username: user.username
				}
			});
		}
	} catch(err) {
		yield put({ type: USERS__LOGIN_USER_FAILURE });
		yield put(showAlert(err));
	}
}



export default [
	takeEvery(USERS__FETCH_USER, fetchUserWorker),
	takeEvery(USERS__LOGOUT_USER, logoutUserWorker),
	takeEvery(USERS__LOGIN_USER, loginUserWorker)
];
