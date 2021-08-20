import NextHead from 'next/head'

const title = 'Users Next.js'
const defaultDescr = 'Test task with React & Next.js'

const Head = props => (
	<NextHead>
		<meta charSet="UTF-8" />
		<title>{title}{props.title ? ` - ${props.title}` : '' }</title>
		<meta name="description" content={props.description || defaultDescr} />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</NextHead>
)

export default Head
