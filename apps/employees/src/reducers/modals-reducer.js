import { MODALS__SHOW_MODAL, MODALS__HIDE_MODAL } from '../actions/types';

const initialState = {
	isHidden: true,
	title: '',
	component: null,
	onClose: null
};

const modalsReducer = (state=initialState, { type, payload }) => {
	switch (type) {

		case MODALS__SHOW_MODAL: return {
			...state,
			isHidden: false,
			...payload
		};

		case MODALS__HIDE_MODAL: return {
			...state,
			isHidden: true,
			title: '',
			component: null,
			onClose: null
		};

		default: return state;

	}
}

export default modalsReducer;
