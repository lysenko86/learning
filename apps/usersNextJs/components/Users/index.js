import { Component } from 'react'

import UsersTopBar from '../UsersTopBar'
import UsersTable from '../UsersTable'
import Spinner from '../Spinner'
import Alert from '../Alert'
import styles from './Users.module.scss'
import jsonPlaceholderService from '../../services/jsonplaceholder-service'

class Users extends Component {
	state = {
		isLoading: false,
		error: '',
		users: this.props.users,
		search: ''
	}

	getMoreUsers = () => {
		this.setState({
			isLoading: true,
			error: ''
		})
		const offset = this.state.users.length
		jsonPlaceholderService.getUsers(offset).then(data => {
			this.setState({
				isLoading: false,
				users: [...this.state.users, ...data]
			})
		}).catch(err => {
			this.setState({
				isLoading: false,
				error: err.message
			})
		})
	}

	render() {
		const { isLoading, error, users, search } = this.state;
		return (
			<div className="users-table">
				<div className={styles['users-table__top-bar']}>
					<UsersTopBar search={search} />
				</div>
				<div className="users-table__table">
					<UsersTable users={users} />
				</div>
				<div className={styles['users-table__more-btn']}>
					<Alert text={error} />
					{ isLoading ? <Spinner /> :
						<button
							type="button"
							className="btn btn-primary"
							onClick={this.getMoreUsers}
						>Load more</button> }
				</div>
			</div>
		)
	}
}

export default Users
