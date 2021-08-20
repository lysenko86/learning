import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Cells from './cells';
import Pagination from './pagination';
import SearchForm from './search-form';
import EmployeeView from './employee-view';
import EmployeeForm from './employee-form';
import Spinner from '../../components/spinner';
import { showAlert, showModal, hideModal, fetchEmployees, filterEmployees, getEmployeeClear } from '../../actions';
import { objToArr, filterItems, getCountPages, getEmployeesUrlWithToggleId } from '../../utils';

class Table extends Component {
	state = {
		tableInited: false
	}

	componentDidMount() {
		this.props.fetchEmployees(this.props.currentPage);
		const { employeeId, showModal, hideModal, history, getEmployeeClear } = this.props;
		if (employeeId) {
			const closeViewHandler = () => {
				history.push(getEmployeesUrlWithToggleId(history));
				getEmployeeClear();
				hideModal();
			};
			showModal({
				title: 'View employee',
				component: <EmployeeView onClose={closeViewHandler} employeeId={employeeId} />,
				onClose: closeViewHandler
			});
		}
	}

	componentDidUpdate(prevProps) {
		const { currentPage, countItems, countOnPage, fetchEmployees, showAlert } = this.props;
		if (prevProps.currentPage !== currentPage || (this.state.tableInited && prevProps.countItems !== countItems)) {
			fetchEmployees(currentPage);
			this.setState({ tableInited: true });
		}
		const countPages = getCountPages(countItems, countOnPage);
		if (countPages > 0 && (currentPage < 1 || currentPage > countPages)) {
			showAlert(`Page №${currentPage} - is not exists.`, 'danger');
		}
	}

	addHandler = () => {
		this.props.showModal({
			title: 'Add new employee',
			component: <EmployeeForm />
		});
	}

	render() {
		const {
			isLoading, employees, countItems, countOnPage, url, history, currentPage,
			searchValue, filterEmployees
		} = this.props;
		const items = objToArr(employees);
		const countPages = getCountPages(countItems, countOnPage);

		const noEmployees = items.length ? null : (
			<h3 className="pt-5 text-center">The database have not employees yet</h3>
		);

		const table = noEmployees ? null : (
			<div className="employees-page__table pt-4">
				<Pagination url={url} countPages={countPages} currentPage={currentPage} />
				<Cells items={items} history={history} />
				<Pagination url={url} countPages={countPages} currentPage={currentPage} />
			</div>
		);

		return (
			<Fragment>
				<div className="employees-page__top-bar">
					<button
						className="btn btn-primary"
						onClick={this.addHandler}
						disabled={isLoading}
					>Add new employee</button>
					<SearchForm
						isLoading={isLoading}
						searchValue={searchValue}
						filterEmployees={filterEmployees}
					/>
				</div>
				{ isLoading ? <Spinner /> : (noEmployees || table) }
			</Fragment>
		)
	}
};

const mapStateToProps = ({ employees }) => ({
	isLoading: employees.isLoading,
	employees: filterItems(employees.items, employees.searchValue),
	searchValue: employees.searchValue,
	countItems: employees.countItems,
	countOnPage: employees.countOnPage
});

const mapDispatchToProps = {
	showAlert,
	showModal,
	hideModal,
	fetchEmployees,
	filterEmployees,
	getEmployeeClear
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
