import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { hideModal, removeEmployee } from '../../actions';

const EmployeeRemove = ({ employee, hideModal, removeEmployee }) => {
	const removeEmployeeHandler = id => {
		removeEmployee(employee.id);
		hideModal();
	}

	return (
		<Fragment>
			<div className="pt-2 pb-4">Are you sure you want to remove employee "{employee.name}"?</div>
			<button className="btn btn-primary btn-sm" onClick={() => removeEmployeeHandler(employee.id)}>Remove</button>
			<button className="btn btn-secondary btn-sm float-right" onClick={hideModal}>Cancel</button>
		</Fragment>
	)
};

const mapDispatchToProps = {
	hideModal,
	removeEmployee
};

export default connect(null, mapDispatchToProps)(EmployeeRemove);
