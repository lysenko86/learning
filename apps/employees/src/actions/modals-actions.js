import { MODALS__SHOW_MODAL, MODALS__HIDE_MODAL } from './types';

export const showModal = obj => ({
	type: MODALS__SHOW_MODAL,
	payload: obj
});

export const hideModal = () => ({
	type: MODALS__HIDE_MODAL
});
