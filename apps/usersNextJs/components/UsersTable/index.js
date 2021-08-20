import UsersTableRow from '../UsersTableRow'
import styles from './UsersTable.module.scss'

const UsersTable = ({ users }) => (
	<table className="table table-hover">
		<thead className="thead-dark">
			<tr>
				<th>ID</th>
				<th>UserName</th>
				<th>E-Mail</th>
				<th>Address</th>
				<th className={styles['users-table__actions-btn']}>Actions</th>
			</tr>
		</thead>
		<tbody>
			{ users.map((user, index) => (
				<tr key={index}><UsersTableRow user={user} /></tr>
			) ) }
		</tbody>
	</table>
)

export default UsersTable
