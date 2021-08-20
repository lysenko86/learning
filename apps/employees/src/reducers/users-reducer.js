import {
	USERS__FETCH_USER_REQUEST, USERS__FETCH_USER_SUCCESS, USERS__FETCH_USER_FAILURE,
	USERS__LOGOUT_USER_SUCCESS,
	USERS__LOGIN_USER_REQUEST, USERS__LOGIN_USER_SUCCESS, USERS__LOGIN_USER_FAILURE
} from '../actions/types';

const initialState = {
	isLoggedIn: false,
	isLoadingToken: false,
	isLoadingLogin: false,
	data: null
}

const usersReducer = (state=initialState, { type, payload }) => {
	switch (type) {

		case USERS__FETCH_USER_REQUEST: return {
			...state,
			isLoadingToken: true
		};

		case USERS__FETCH_USER_SUCCESS: return {
			...state,
			isLoggedIn: true,
			isLoadingToken: false,
			data: payload
		};

		case USERS__FETCH_USER_FAILURE: return {
			...state,
			isLoggedIn: false,
			isLoadingToken: false,
			data: null
		};

		case USERS__LOGIN_USER_REQUEST: return {
			...state,
			isLoadingLogin: true
		};

		case USERS__LOGIN_USER_SUCCESS: return {
			...state,
			isLoggedIn: true,
			isLoadingLogin: false,
			data: payload
		};

		case USERS__LOGIN_USER_FAILURE: return {
			...state,
			isLoggedIn: false,
			isLoadingLogin: false,
			data: null
		};

		case USERS__LOGOUT_USER_SUCCESS: return {
			...state,
			isLoggedIn: false,
			data: null
		};

		default: return state;

	}
}

export default usersReducer;
