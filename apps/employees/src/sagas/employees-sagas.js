import { takeEvery, put, call, select } from 'redux-saga/effects';

import firebaseService from '../services/firebase-service';
import {
	EMPLOYEES__FETCH_EMPLOYEES,
	EMPLOYEES__FETCH_EMPLOYEES_REQUEST, EMPLOYEES__FETCH_EMPLOYEES_SUCCESS, EMPLOYEES__FETCH_EMPLOYEES_FAILURE,
	EMPLOYEES__REMOVE_EMPLOYEE,
	EMPLOYEES__REMOVE_EMPLOYEE_REQUEST, EMPLOYEES__REMOVE_EMPLOYEE_SUCCESS, EMPLOYEES__REMOVE_EMPLOYEE_FAILURE,
	EMPLOYEES__GET_EMPLOYEE,
	EMPLOYEES__GET_EMPLOYEE_REQUEST, EMPLOYEES__GET_EMPLOYEE_SUCCESS, EMPLOYEES__GET_EMPLOYEE_FAILURE,
	EMPLOYEES__ADD_EMPLOYEE,
	EMPLOYEES__ADD_EMPLOYEE_REQUEST, EMPLOYEES__ADD_EMPLOYEE_SUCCESS, EMPLOYEES__ADD_EMPLOYEE_FAILURE,
	EMPLOYEES__EDIT_EMPLOYEE,
	EMPLOYEES__EDIT_EMPLOYEE_REQUEST, EMPLOYEES__EDIT_EMPLOYEE_SUCCESS, EMPLOYEES__EDIT_EMPLOYEE_FAILURE
} from '../actions/types';
import { showAlert } from '../actions';



function fetchEmployees(currentPage, countOnPage) {
	return firebaseService.employeesFetch(currentPage, countOnPage);
};

function* fetchEmployeesWorker({ payload }) {
	yield put({ type: EMPLOYEES__FETCH_EMPLOYEES_REQUEST });
	const pageDetails = yield select(state => state.employees);
	try {
		const data = yield call(fetchEmployees, payload, pageDetails.countOnPage);
		yield put({
			type: EMPLOYEES__FETCH_EMPLOYEES_SUCCESS,
			payload: data
		});
	} catch(err) {
		yield put({ type: EMPLOYEES__FETCH_EMPLOYEES_FAILURE });
		yield put(showAlert(err));
	}
};



function removeEmployee(id) {
	return firebaseService.employeesRemove(id);
};

function* removeEmployeesWorker({ payload }) {
	yield put({ type: EMPLOYEES__REMOVE_EMPLOYEE_REQUEST });
	try {
		yield call(removeEmployee, payload);
		yield put({ type: EMPLOYEES__REMOVE_EMPLOYEE_SUCCESS });
	} catch(err) {
		yield put({ type: EMPLOYEES__REMOVE_EMPLOYEE_FAILURE });
		yield put(showAlert(err));
	}
};



function getEmployee(id) {
	return firebaseService.employeesGet(id);
};

function* getEmployeesWorker({ payload }) {
	yield put({ type: EMPLOYEES__GET_EMPLOYEE_REQUEST });
	try {
		const employees = yield select(state => state.employees.items);
		let employee = employees[payload]; // Cache
		if (!employee) {
			const res = yield call(getEmployee, payload);
			employee = res.data;
		}
		if (!employee) {
			yield put({ type: EMPLOYEES__GET_EMPLOYEE_FAILURE });
			yield put(showAlert('Employee is not exists', 'danger'));
		} else {
			yield put({
				type: EMPLOYEES__GET_EMPLOYEE_SUCCESS,
				payload: {
					id: payload,
					...employee
				}
			});
		}
	} catch(err) {
		yield put({ type: EMPLOYEES__GET_EMPLOYEE_FAILURE });
		yield put(showAlert(err));
	}
};



function addEmployee(employee) {
	return firebaseService.employeesAdd(employee);
};

function* addEmployeesWorker({ payload }) {
	yield put({ type: EMPLOYEES__ADD_EMPLOYEE_REQUEST });
	try {
		yield call(addEmployee, payload);
		yield put({ type: EMPLOYEES__ADD_EMPLOYEE_SUCCESS });
		yield put(showAlert('Employee was created successfully'));
	} catch(err) {
		yield put({ type: EMPLOYEES__ADD_EMPLOYEE_FAILURE });
		yield put(showAlert(err));
	}
};



function editEmployee(id, employee) {
	return firebaseService.employeesEdit(id, employee);
};

function* editEmployeesWorker({ payload }) {
	yield put({ type: EMPLOYEES__EDIT_EMPLOYEE_REQUEST });
	try {
		yield call(editEmployee, payload.id, payload.employee);
		yield put({ type: EMPLOYEES__EDIT_EMPLOYEE_SUCCESS });
		yield put(showAlert('Employee was edited successfully'));
	} catch(err) {
		yield put({ type: EMPLOYEES__EDIT_EMPLOYEE_FAILURE });
		yield put(showAlert(err));
	}
};



export default [
	takeEvery(EMPLOYEES__FETCH_EMPLOYEES, fetchEmployeesWorker),
	takeEvery(EMPLOYEES__REMOVE_EMPLOYEE, removeEmployeesWorker),
	takeEvery(EMPLOYEES__GET_EMPLOYEE, getEmployeesWorker),
	takeEvery(EMPLOYEES__ADD_EMPLOYEE, addEmployeesWorker),
	takeEvery(EMPLOYEES__EDIT_EMPLOYEE, editEmployeesWorker)
];
