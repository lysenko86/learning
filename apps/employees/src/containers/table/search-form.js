import React, { useState, useEffect } from 'react';

const SearchForm = ({ isLoading, searchValue, filterEmployees }) => {
	const [ value, setValue ] = useState(searchValue);

	useEffect(() => {
		setValue(searchValue);
	}, [ searchValue ]);

	const searchHandle = () => {
		filterEmployees(value);
	};

	const clearHandle = () => {
		setValue('');
		filterEmployees('');
	};

	const clearBtn = <button
		className="btn btn-outline-danger clear-btn"
		onClick={clearHandle}
	>&times;</button>;

	return (
		<div className="input-group">
			{ value && clearBtn }
			<input
				type="text"
				className="form-control"
				placeholder="Employee Name..."
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<div className="input-group-append">
				<button
					className="btn btn-primary"
					type="button"
					disabled={isLoading}
					onClick={searchHandle}
				>Search</button>
			</div>
		</div>
	);
}

export default SearchForm;
