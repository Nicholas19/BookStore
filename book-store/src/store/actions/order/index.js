import actions from 'store/actions/actionTypes';

export const changeFormData = (payload) => {
	return {
		type: actions.FormChange,
		payload
	}
}