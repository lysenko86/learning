import React from 'react';

const AuthWelcome = ({ username, onLogout }) => (
	<div className="text-center">
		<h1>Welcome on test application, dear {username}!</h1>
		<button type="button" className="btn btn-primary" onClick={onLogout}>Logout</button>
	</div>
);

export default AuthWelcome;
