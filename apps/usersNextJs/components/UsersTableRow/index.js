const UsersTableRow = ({ user }) => {
	const { id, username, email } = user;
	const address = `${user.address.city}, ${user.address.street}, ${user.address.suite}`;

	return (
		<>
			<td>{id}</td>
			<td>{username}</td>
			<td>{email}</td>
			<td>{address}</td>
			<td>
				<button type="button" className="btn btn-outline-primary btn-sm" onClick={() => {}}>View</button>
				<button type="button" className="btn btn-outline-primary btn-sm" onClick={() => {}} >Edit</button>
				<button type="button" className="btn btn-danger btn-sm" onClick={() => {}}>Delete</button>
			</td>
		</>
	)
}

export default UsersTableRow
