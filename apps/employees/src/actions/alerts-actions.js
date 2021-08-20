import { ALERTS__SHOW_ALERT, ALERTS__HIDE_ALERT } from './types';

export const showAlert = (message, type) => ({
	type: ALERTS__SHOW_ALERT,
	payload: { message, type }
});

export const hideAlert = () => ({
	type: ALERTS__HIDE_ALERT
});
