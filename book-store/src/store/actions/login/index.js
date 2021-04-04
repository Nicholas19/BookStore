import actions from 'store/actions/actionTypes';

export const login = (payload) => {
	return {
		type: actions.Login,
		payload
	}
}