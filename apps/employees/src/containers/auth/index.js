import React from 'react';
import { connect } from 'react-redux';

import AuthWelcome from './auth-welcome';
import AuthForm from './auth-form';
import Spinner from '../../components/spinner';
import { logoutUser } from '../../actions';

const Auth = ({ isLoadingToken, isLoggedIn, user, logoutUser }) => {
	const content = isLoggedIn ? <AuthWelcome username={user.username} onLogout={logoutUser} /> : <AuthForm />;

	return isLoadingToken ? <Spinner /> : content;
};

const mapStateToProps = ({ user }) => ({
	isLoggedIn: user.isLoggedIn,
	isLoadingToken: user.isLoadingToken,
	user: user.data
});

const mapDispatchToProps = {
	logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
