import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
	state = { errorMessage: '' }

	componentDidCatch(err) {
		this.setState({ errorMessage: err.message });
	}

	render() {
		const { errorMessage } = this.state;
		return !errorMessage ? this.props.children : (
			<div className="error-msg">
				<div className="alert alert-danger error-msg__body">
					<span className="error-msg__title">ERROR!</span>
					<span className="error-msg__text">Something went wrong, we are fixing it right now!</span>
					<div className="error-msg__details">
						<strong>Details:</strong> {errorMessage}
					</div>
				</div>
			</div>
		)
	}
};
