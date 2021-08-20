import { ALERTS__SHOW_ALERT, ALERTS__HIDE_ALERT } from '../actions/types';

const initialState = {
	type: '',
	message: ''
}

const alertsReducer = (state=initialState, { type, payload }) => {
	switch (type) {

		case ALERTS__SHOW_ALERT: return {
			...state,
			type: payload.type || 'success',
			message: payload.message
		};

		case ALERTS__HIDE_ALERT: return {
			...state,
			type: '',
			message: ''
		};

		default: return state;

	}
}

export default alertsReducer;
