import actions from '../actionTypes';

export const filterData = (val) => {
	return {
		type: actions.Search,
		val
	}
}