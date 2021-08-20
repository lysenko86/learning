import { useState } from 'react'

const UsersTopBar = ({ search }) => (<>
	<button className="btn btn-primary" onClick={() => {}}>Add new user</button>
	<div className="input-group w-auto">
		<input
			type="text"
			className="form-control"
			placeholder="Enter username..."
			value={value}
			onChange={e => {}}
		/>
		<div className="input-group-append">
			<button
				className="btn btn-primary"
				type="button"
				onClick={() => {}}
			>Search</button>
		</div>
	</div>
</>)

export default UsersTopBar
