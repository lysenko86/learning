import styles from './Spinner.module.scss'

const Spinner = () => (
	<div className={styles.spinner}>
		<div className="spinner-grow text-primary"></div>
		<div className="spinner-grow text-primary"></div>
		<div className="spinner-grow text-primary"></div>
	</div>
);

export default Spinner;
