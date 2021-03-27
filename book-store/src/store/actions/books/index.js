import actions from '../actionTypes';

export const filterData = (payload) => {
	return {
		type: actions.Search,
		payload
	}
}

export const setPageNumber = (payload) => {
	return {
		type: actions.SetPageNumber,
		payload
	}
}