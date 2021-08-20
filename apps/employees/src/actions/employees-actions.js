import {
	EMPLOYEES__FETCH_EMPLOYEES, EMPLOYEES__FILTER_EMPLOYEE,
	EMPLOYEES__REMOVE_EMPLOYEE,
	EMPLOYEES__GET_EMPLOYEE, EMPLOYEES__GET_EMPLOYEE_CLEAR,
	EMPLOYEES__ADD_EMPLOYEE,
	EMPLOYEES__EDIT_EMPLOYEE
} from './types';

export const fetchEmployees = page => ({
	type: EMPLOYEES__FETCH_EMPLOYEES,
	payload: page
});

export const filterEmployees = searchValue => ({
	type: EMPLOYEES__FILTER_EMPLOYEE,
	payload: searchValue
});

export const removeEmployee = id => ({
	type: EMPLOYEES__REMOVE_EMPLOYEE,
	payload: id
});

export const getEmployee = id => ({
	type: EMPLOYEES__GET_EMPLOYEE,
	payload: id
});

export const getEmployeeClear = () => ({
	type: EMPLOYEES__GET_EMPLOYEE_CLEAR
});

export const addEmployee = employee => ({
	type: EMPLOYEES__ADD_EMPLOYEE,
	payload: employee
});

export const editEmployee = (id, employee) => ({
	type: EMPLOYEES__EDIT_EMPLOYEE,
	payload: { id, employee }
});
