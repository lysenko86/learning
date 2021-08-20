import {
	EMPLOYEES__FETCH_EMPLOYEES_REQUEST, EMPLOYEES__FETCH_EMPLOYEES_SUCCESS, EMPLOYEES__FETCH_EMPLOYEES_FAILURE,
	EMPLOYEES__FILTER_EMPLOYEE,
	EMPLOYEES__REMOVE_EMPLOYEE_REQUEST, EMPLOYEES__REMOVE_EMPLOYEE_SUCCESS, EMPLOYEES__REMOVE_EMPLOYEE_FAILURE,
	EMPLOYEES__GET_EMPLOYEE_REQUEST, EMPLOYEES__GET_EMPLOYEE_SUCCESS, EMPLOYEES__GET_EMPLOYEE_FAILURE, EMPLOYEES__GET_EMPLOYEE_CLEAR,
	EMPLOYEES__ADD_EMPLOYEE_REQUEST, EMPLOYEES__ADD_EMPLOYEE_SUCCESS, EMPLOYEES__ADD_EMPLOYEE_FAILURE,
	EMPLOYEES__EDIT_EMPLOYEE_REQUEST, EMPLOYEES__EDIT_EMPLOYEE_SUCCESS, EMPLOYEES__EDIT_EMPLOYEE_FAILURE
} from '../actions/types';

const initialState = {
	items: {},
	countItems: 0,
	isLoading: false,
	countOnPage: 4,
	searchValue: '',
	isLoadingEmployee: false,
	employee: null
}

const employeesReducer = (state=initialState, { type, payload }) => {
	switch (type) {

		case EMPLOYEES__FETCH_EMPLOYEES_REQUEST: return {
			...state,
			isLoading: true
		};

		case EMPLOYEES__FETCH_EMPLOYEES_SUCCESS: return {
			...state,
			isLoading: false,
			searchValue: '',
			countItems: payload.countItems,
			items: payload.items
		};

		case EMPLOYEES__FETCH_EMPLOYEES_FAILURE: return {
			...state,
			isLoading: false
		};

		case EMPLOYEES__FILTER_EMPLOYEE: return {
			...state,
			searchValue: payload
		};

		case EMPLOYEES__REMOVE_EMPLOYEE_REQUEST: return {
			...state,
			isLoading: true
		};

		case EMPLOYEES__REMOVE_EMPLOYEE_SUCCESS: return {
			...state,
			isLoading: false,
			searchValue: '',
			countItems: state.countItems - 1
		};

		case EMPLOYEES__REMOVE_EMPLOYEE_FAILURE: return {
			...state,
			isLoading: false
		};

		case EMPLOYEES__GET_EMPLOYEE_REQUEST: return {
			...state,
			isLoadingEmployee: true
		};

		case EMPLOYEES__GET_EMPLOYEE_SUCCESS: return {
			...state,
			isLoadingEmployee: false,
			employee: payload
		};

		case EMPLOYEES__GET_EMPLOYEE_CLEAR: return {
			...state,
			employee: null
		};

		case EMPLOYEES__GET_EMPLOYEE_FAILURE: return {
			...state,
			isLoadingEmployee: false
		};

		case EMPLOYEES__ADD_EMPLOYEE_REQUEST: return {
			...state,
			isLoading: true
		};

		case EMPLOYEES__ADD_EMPLOYEE_SUCCESS: return {
			...state,
			isLoading: false,
			searchValue: '',
			countItems: state.countItems + 1
		};

		case EMPLOYEES__ADD_EMPLOYEE_FAILURE: return {
			...state,
			isLoading: false
		};

		case EMPLOYEES__EDIT_EMPLOYEE_REQUEST: return {
			...state,
			isLoading: true
		};

		case EMPLOYEES__EDIT_EMPLOYEE_SUCCESS: return {
			...state,
			isLoading: false,
			searchValue: '',
			countItems: state.countItems + 1
		};

		case EMPLOYEES__EDIT_EMPLOYEE_FAILURE: return {
			...state,
			isLoading: false
		};

		default: return state;

	}
}

export default employeesReducer;
