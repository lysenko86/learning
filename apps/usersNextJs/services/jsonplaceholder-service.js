import axios from 'axios'

class JsonPlaceholderServiceClass {
	apiUrl = 'https://jsonplaceholder.typicode.com'

	getUsers = async (offset) => {
		const limit = 10
		let url = `${this.apiUrl}/users`
		url += offset ? `?offset=${offset}&limit=${limit}` : ''
		const res = await axios.get(url)
		return res ? res.data : []
	}

}

const jsonPlaceholderService = new JsonPlaceholderServiceClass()

export default jsonPlaceholderService
