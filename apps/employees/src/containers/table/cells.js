import React from 'react';
import { connect } from 'react-redux';

import TableRow from './table-row';
import EmployeeRemove from './employee-remove';
import EmployeeView from './employee-view';
import EmployeeForm from './employee-form';
import { showModal, hideModal, getEmployeeClear } from '../../actions';
import { getEmployeesUrlWithToggleId } from '../../utils';

const Cells = ({ items, history, showModal, hideModal, getEmployeeClear }) => {
	const removeHandler = employee => {
		showModal({
			title: 'Remove employee',
			component: <EmployeeRemove employee={employee} />
		});
	};

	const closeViewHandler = () => {
		history.push(getEmployeesUrlWithToggleId(history));
		getEmployeeClear();
		hideModal();
	};
	const viewHandler = id => {
		history.push(getEmployeesUrlWithToggleId(history, id));
		showModal({
			title: 'View employee',
			component: <EmployeeView onClose={closeViewHandler} employeeId={id} />,
			onClose: closeViewHandler
		});
	};

	const editHandler = id => {
		showModal({
			title: 'Edit employee',
			component: <EmployeeForm employeeId={id} />
		});
	};

	return (
		<table className="table table-hover">
			<thead className="thead-dark">
				<tr>
					<th>empID</th>
					<th>empName</th>
					<th>empActive</th>
					<th>empDepartment</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{ items.map((employee, index) => (
					<tr key={index}><TableRow
						employee={employee}
						viewHandler={() => viewHandler(employee.id)}
						editHandler={() => editHandler(employee.id)}
						removeHandler={() => removeHandler(employee)}
					/></tr>
				) ) }
			</tbody>
		</table>
	)
};

const mapDispatchToProps = {
	showModal,
	hideModal,
	getEmployeeClear
};

export default connect(null, mapDispatchToProps)(Cells);
