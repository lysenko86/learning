import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Spinner from '../../components/spinner';
import { getEmployee } from '../../actions';

class EmployeeView extends Component {
	componentDidMount() {
		this.props.getEmployee(this.props.employeeId);
	}

	 render() {
		 const { onClose, isLoadingEmployee, employee } = this.props;

		 let employeeList = null;
		 if (employee) {
			 const { id, name, active, field1, field2, department } = employee;
			 employeeList = <ul className="list-group pt-2 pb-4">
				 <li className="list-group-item"><strong>ID:</strong> {id}</li>
				 <li className="list-group-item"><strong>Name:</strong> {name}</li>
				 <li className="list-group-item"><strong>Active:</strong> {active ? 'YES' : 'NO'}</li>
				 <li className="list-group-item"><strong>Field 1:</strong> {field1}</li>
				 <li className="list-group-item"><strong>Field 2:</strong> {field2}</li>
				 <li className="list-group-item"><strong>Department:</strong> {department}</li>
			 </ul>;
		 }

		 return <Fragment>
			{ isLoadingEmployee ? <Spinner /> : employeeList }
			<button className="btn btn-secondary btn-sm float-right" onClick={onClose}>Close</button>
		</Fragment>
	 }
};

const mapStateToProps = ({ employees }) => ({
	isLoadingEmployee: employees.isLoadingEmployee,
	employee: employees.employee
});

const mapDispatchToProps = {
	getEmployee
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeView);
