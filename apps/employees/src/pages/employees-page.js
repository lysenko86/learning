import React from 'react';
import { parse } from 'query-string';

import Modal from '../components/modal';
import Table from '../containers/table';

const EmployeesPage = ({ location, match, history }) => {
	const employeeId = match.params.id;
	const currentPage = Number(parse(location.search).page) || 1;
	const url = location.pathname;

	return (
		<div className="employees-page">
			<Modal />
			<Table
				url={url}
				history={history}
				employeeId={employeeId}
				currentPage={currentPage}
			/>
		</div>
	)
};

export default EmployeesPage;
