import React, { Component } from 'react';
import { connect } from 'react-redux';

import AuthBlock from './auth-block';
import MenuItems from './menu-items';
import { fetchUser, logoutUser } from '../../actions';

class NavBar extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		const { user, isLoggedIn, logoutUser } = this.props;

		return (
			<nav className="navbar navbar-dark navbar-expand-lg bg-primary">
				<div className="menu-container">
					<div className="navbar-brand">Employees</div>
					<MenuItems />
				</div>
				{ isLoggedIn && <AuthBlock username={user.username} onLogout={logoutUser} /> }
			</nav>
		);
	}
};

const mapStateToProps = ({ user }) => ({
	user: user.data,
	isLoggedIn: user.isLoggedIn
});

const mapDispatchToProps = {
	fetchUser,
	logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
