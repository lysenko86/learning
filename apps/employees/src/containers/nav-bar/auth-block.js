import React from 'react';

const AuthBlock = ({ username, onLogout }) => (
	<div className="auth-container">
		<div className="auth-username">Hello, {username}!</div>
		<button
			type="button"
			className="btn btn-sm btn-outline-dark"
			onClick={onLogout}
		>Logout</button>
	</div>
);

export default AuthBlock;
