const Alert = ({ text }) => !text ? null : (
	<div className="alert alert-danger text-left alert-dismissible fade show">
		<strong>Error!</strong>Something went wrong.<br />Details: {text}
	</div>
)

export default Alert
