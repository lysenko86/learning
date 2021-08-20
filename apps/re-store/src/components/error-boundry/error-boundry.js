import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends Component {
	state = { textError: '' };

	componentDidCatch(err) {
		this.setState({ textError: err.message });
	}

	render() {
		const { textError } = this.state;
		const { children } = this.props;
		return (!textError ? children : <ErrorIndicator text={textError} />);
	}
};
