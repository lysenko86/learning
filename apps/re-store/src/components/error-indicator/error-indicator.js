import React from 'react';
import './error-indicator.css';

const ErrorIndicator = ({ text }) => {
	return !text ? null : (
		<div className="error-msg">
			<div className="alert alert-danger error-msg__body">
				<span className="error-msg__title">ERROR!</span>
				<span className="error-msg__text">Something went wrong, we are fixing it right now!</span>
				<div className="error-details"><strong>Details:</strong> {text}</div>
			</div>
		</div>
	);
}

export default ErrorIndicator;
