import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Spinner from '../../components/spinner';
import {
	hideModal,
	addEmployee, editEmployee, getEmployee, getEmployeeClear
} from '../../actions';

class EmployeeForm extends Component {
	state = {
		fieldName: '',
		fieldNameInvalid: false,
		fieldActive: false,
		fieldField1: '',
		fieldField2: '',
		fieldDepartment: '',
		fieldDepartmentInvalid: false
	}

	componentDidMount() {
		const { employeeId } = this.props;
		if (employeeId) {
			this.props.getEmployee(employeeId);
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.employee && (prevProps.employee !== this.props.employee)) {
			this.setState({
				fieldName: this.props.employee.name,
				fieldActive: this.props.employee.active,
				fieldField1: this.props.employee.field1,
				fieldField2: this.props.employee.field2,
				fieldDepartment: this.props.employee.department
			});
		}
	}

	fieldNameOnChange = e => this.setState({
		fieldName: e.target.value,
		fieldNameInvalid: false
	})
	fieldActiveOnChange = e => this.setState({ fieldActive: e.target.checked })
	fieldField1OnChange = e => this.setState({ fieldField1: e.target.value })
	fieldField2OnChange = e => this.setState({ fieldField2: e.target.value })
	fieldDepartmentOnChange = e => this.setState({
		fieldDepartment: e.target.value,
		fieldDepartmentInvalid: false
	})

	onSubmit = e => {
		e.preventDefault();
		if (this.state.fieldName.trim().length < 3) {
			this.setState({ fieldNameInvalid: true });
		} else if (!this.state.fieldDepartment.trim()) {
			this.setState({ fieldDepartmentInvalid: true });
		} else if (!this.state.fieldNameInvalid && !this.state.fieldDepartmentInvalid) {
			const employee = {
				name: this.state.fieldName,
				active: this.state.fieldActive,
				field1: this.state.fieldField1,
				field2: this.state.fieldField2,
				department: this.state.fieldDepartment
			}
			if (!this.props.employeeId) {
				this.props.addEmployee(employee);
			} else {
				this.props.editEmployee(this.props.employeeId, employee);
				this.props.getEmployeeClear();
			}
			this.props.hideModal();
		}
	}

	render() {
		const {
			fieldName, fieldNameInvalid,
			fieldActive, fieldField1, fieldField2,
			fieldDepartment, fieldDepartmentInvalid
		} = this.state;
		const { hideModal, isLoadingEmployee, employeeId } = this.props;

		const fieldNameClasses = classNames({
			'form-control': true,
			'is-invalid': fieldNameInvalid
		});
		const fieldDepartmentClasses = classNames({
			'form-control': true,
			'is-invalid': fieldDepartmentInvalid
		});

		return isLoadingEmployee ? <Spinner /> : (
			<form onSubmit={this.onSubmit}>
				<div className="form-group">
					<label>Enter employee name:</label>
					<input
						type="text"
						className={fieldNameClasses}
						value={fieldName}
						onChange={this.fieldNameOnChange}
						placeholder="Employee name"
					/>
					<div className="invalid-feedback">This field is required and has to contain more than 3 letters</div>
				</div>
				<div className="form-group form-check">
					<input
						type="checkbox"
						className="form-check-input"
						id="fieldActive"
						checked={fieldActive}
						onChange={this.fieldActiveOnChange}
					/>
					<label className="form-check-label" htmlFor="fieldActive">set an active</label>
				</div>
				<div className="form-group">
					<label>Enter field 1 value:</label>
					<input
						type="text"
						className="form-control"
						value={fieldField1}
						onChange={this.fieldField1OnChange}
						placeholder="Field1 value"
					/>
				</div>
				<div className="form-group">
					<label>Enter field 2 value:</label>
					<input
						type="text"
						className="form-control"
						value={fieldField2}
						onChange={this.fieldField2OnChange}
						placeholder="Field1 value"
					/>
				</div>
				<div className="form-group">
					<label>Select employee department:</label>
					<select
						className={fieldDepartmentClasses}
						value={fieldDepartment}
						onChange={this.fieldDepartmentOnChange}
					>
						<option value=""></option>
						<option value="HR">HR</option>
						<option value="Tech">Tech</option>
						<option value="Finance">Finance</option>
					</select>
					<div className="invalid-feedback">This field is required</div>
				</div>
				<button
					type="submit"
					className="btn btn-primary btn-sm"
				>{employeeId ? 'Save' : 'Add'}</button>
				<button
					type="button"
					className="btn btn-secondary btn-sm float-right"
					onClick={hideModal}
				>Cancel</button>
			</form>
		);
	}
};

const mapStateToProps = ({ employees }) => ({
	isLoadingEmployee: employees.isLoadingEmployee,
	employee: employees.employee
});

const mapDispatchToProps = {
	hideModal,
	addEmployee,
	editEmployee,
	getEmployee,
	getEmployeeClear
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm);
