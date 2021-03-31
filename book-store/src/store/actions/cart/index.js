import actions from 'store/actions/actionTypes';

export const add = (payload) => {
	return {
		type: actions.Add,
		payload
	}
}

export const remove = (payload) => {
	return {
		type: actions.Remove,
		payload
	}
}

export const changeCnt = (id, cnt) => {
	return {
		type: actions.Change,
		payload:{
			id,
			cnt
		}
	}
}