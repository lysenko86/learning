export const PUT_DATA = 'PUT_DATA';
export const LOAD_DATA = 'LOAD_DATA';

export const putData = (dataFromServer) => {
	return {
		type: PUT_DATA,
		payload: dataFromServer
	};
};

export const loadDataTHUNK = () => (dispatch, getState) => {
	fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then(response => response.json())
		.then(json => {
			dispatch(putData(json));
		});
}

export const loadData = () => {
	return {
		type: LOAD_DATA
	};
}
