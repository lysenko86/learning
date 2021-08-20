import React, { Fragment } from 'react';

const TableRow = ({ employee, removeHandler, viewHandler, editHandler }) => {
	const { id, name, active, department } = employee;

	return (
		<Fragment>
			<td>{id}</td>
			<td>{name}</td>
			<td>{active ? 'YES' : 'NO'}</td>
			<td>{department}</td>
			<td>
				<button type="button" className="btn btn-outline-primary btn-sm" onClick={viewHandler}>View</button>
				<button type="button" className="btn btn-outline-primary btn-sm" onClick={editHandler} >Edit</button>
				<button type="button" className="btn btn-danger btn-sm" onClick={removeHandler}>Delete</button>
			</td>
		</Fragment>
	);
}

export default TableRow;
