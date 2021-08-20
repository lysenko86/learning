import React from 'react';
import { connect } from 'react-redux';

import { hideModal } from '../actions';

const Modal = ({ isHidden, hideModal, title, component, onClose }) => !isHidden && (
	<div className="modal">
		<div className="modal-dialog modal-dialog-centered">
			<div className="modal-content">
				<div className="modal-header">
					<h5 className="modal-title">{title}</h5>
					<button type="button" className="close" onClick={onClose || hideModal}>
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div className="modal-body">{component}</div>
			</div>
		</div>
	</div>
);

const mapStateToProps = ({ modal }) => ({
	isHidden: modal.isHidden,
	title: modal.title,
	component: modal.component,
	onClose: modal.onClose
})

const mapDispatchToProps = {
	hideModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
