import Head from '../components/Head'
import NavBar from '../components/NavBar'
import Users from '../components/Users'
import jsonPlaceholderService from '../services/jsonplaceholder-service'

export async function getStaticProps() {
	const users = await jsonPlaceholderService.getUsers()
	return {
		props: { users }
	}
}

const UsersPage = ({ users }) => (<>
	<Head title="Users page" />
	<NavBar />
	<main className="container mt-5 mb-5">
		<Users users={users} />
	</main>
</>)

export default UsersPage
