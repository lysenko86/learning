import * as alertsActions from './alerts-actions';
import * as modalsActions from './modals-actions';
import * as usersActions from './users-actions';
import * as employeesActions from './employees-actions';

const { showAlert, hideAlert } = alertsActions;
const { showModal, hideModal } = modalsActions;
const { fetchUser, logoutUser, loginUser } = usersActions;
const {
	fetchEmployees, filterEmployees,
	removeEmployee, getEmployee, getEmployeeClear, addEmployee, editEmployee
} = employeesActions;

export {
	showAlert, hideAlert,
	showModal, hideModal,
	fetchUser, logoutUser, loginUser,
	fetchEmployees, filterEmployees,
	removeEmployee, getEmployee, getEmployeeClear, addEmployee, editEmployee
}
