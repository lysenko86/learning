import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import { showAlert, loginUser } from '../../actions';

const AuthForm = ({ isLoadingLogin, showAlert, loginUser }) => {
	const [ login, setLogin ] = useState('');
	const [ password, setPassword ] = useState('');

	const onSubmit = event => {
		event.preventDefault();
		if (!login.trim() || !password.trim()) {
			showAlert('Login and Password fields can\'t be empty', 'danger');
			return;
		}
		loginUser(login, password);
		setLogin('');
		setPassword('');
	}

	return (
		<Fragment>
			<h1>Welcome, please authorize</h1>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label>Enter login:</label>
					<input
						type="text"
						className="form-control"
						value={login}
						onChange={e => setLogin(e.target.value)}
					/>
					<small className="form-text text-muted">Use logins "user1" or "user2"</small>
				</div>
				<div className="form-group">
					<label>Enter password:</label>
					<input
						type="password"
						className="form-control"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<small className="form-text text-muted">Use passwords "123" or "456"</small>
				</div>
				<button type="submit" className="btn btn-primary" disabled={isLoadingLogin}>Login</button>
			</form>
		</Fragment>
	);
};

const mapStateToProps = ({ user }) => ({
	isLoadingLogin: user.isLoadingLogin
});

const mapDispatchToProps = {
	showAlert,
	loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
