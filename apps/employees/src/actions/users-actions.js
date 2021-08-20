import { USERS__FETCH_USER, USERS__LOGOUT_USER, USERS__LOGIN_USER } from './types';

export const fetchUser = () => ({
	type: USERS__FETCH_USER
});

export const logoutUser = () => ({
	type: USERS__LOGOUT_USER
});

export const loginUser = (login, password) => ({
	type: USERS__LOGIN_USER,
	payload: {
		login,
		password
	}
});
