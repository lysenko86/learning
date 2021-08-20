import Link from 'next/link'

import Head from '../components/Head'
import NavBar from '../components/NavBar'

const usersButton = <Link href="/users">
	<a className="btn btn-outline-primary btn-lg">BUTTON</a>
</Link>;

const HomePage = () => (<>
	<Head title="Home page" />
	<NavBar />
	<main className="container mt-5">
		<h1>Welcome to test application</h1>
		<div>Please press this {usersButton} for working with users table</div>
	</main>
</>)

export default HomePage
