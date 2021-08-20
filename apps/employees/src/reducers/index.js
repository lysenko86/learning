import { combineReducers } from 'redux';

import alertsReducer from './alerts-reducer';
import modalsReducer from './modals-reducer';
import usersReducer from './users-reducer';
import employeesReducer from './employees-reducer';

const rootReducer = combineReducers({
	alert: alertsReducer,
	modal: modalsReducer,
	user: usersReducer,
	employees: employeesReducer
});

export default rootReducer;
