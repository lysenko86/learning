import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItems = () => (
	<ul className="navbar-nav">
		<li className="nav-link">
			<NavLink className="nav-link" to='/' exact>Auth page</NavLink>
		</li>
		<li className="nav-link">
			<NavLink className="nav-link" to='/employees'>Table page</NavLink>
		</li>
	</ul>
);

export default MenuItems;
