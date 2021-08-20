import Link from 'next/link'
import classNames from 'classnames'

import styles from './NavBar.module.scss'

const logoClasses = classNames({
	'navbar-brand': true,
	[styles.logo]: true
})

const NavBar = () => (
	<nav className="navbar navbar-dark navbar-expand-lg bg-primary">
		<div className="menu-container">
			<div className={logoClasses}>
				<Link href="/">
					<a>
						<div className={styles.logo__img}><img src="/group.svg" alt="Logo" /></div>
						<div className={styles.logo__title}>USERS</div>
					</a>
				</Link>
			</div>
		</div>
	</nav>
)

export default NavBar
