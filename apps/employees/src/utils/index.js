export const objToArr = obj => {
	const keys = Object.keys(obj);
	return keys.map(key => ({
		id: key,
		...obj[key]
	}));
};

export const filterItems = (items, value) => {
	if (!value.trim()) {
		return items;
	}
	const newItems = {};
	for (const key in items) {
		if (items[key].name.toLowerCase().includes(value.toLowerCase())) {
			newItems[key] = items[key];
		}
	}
	return newItems;
};

export const getCountPages = (countItems, countOnPage) => {
	return Math.ceil(countItems / countOnPage);
};

export const getEmployeesUrlWithToggleId = (history, id) => {
	const idUrl = id ? `/${id}` : '';
	return `/employees${idUrl}${history.location.search || ''}`;
};
