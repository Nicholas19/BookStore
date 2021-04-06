import actions from 'store/actions/actionTypes';

export const login = (payload) => {
	return {
		type: actions.Login,
		payload
	}
}

export const getUser = (payload) => {
	return {
		type: actions.GetUser,
		payload
	}
}