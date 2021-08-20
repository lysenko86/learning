import React from 'react';
import { useDispatch } from 'react-redux';

import { putData, loadDataTHUNK, loadData } from './actions';

export const Connected = () => {
	const dispatch = useDispatch();
	const onClick1 = () => dispatch(putData());
	const onClick2 = () => dispatch(loadDataTHUNK());
	const onClick3 = () => dispatch(loadData());

	return (
		<div className="container">
			<div className="row">
				<div className="col-4">
					<button
					 	className="btn btn-dark"
						onClick={onClick1}
					>Click me (putData)</button>
				</div>
				<div className="col-4">
					<button
						className="btn btn-dark"
						onClick={onClick2}
					>Click me (loadData - THUNK)</button>
				</div>
				<div className="col-4">
					<button
						className="btn btn-dark"
						onClick={onClick3}
					>Click me (loadData - SAGA)</button>
				</div>
			</div>
		</div>
	);
};
