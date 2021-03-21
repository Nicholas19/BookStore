import actions from 'store/actions/actionTypes';

export const add = (id) => {
	return {
		type: actions.Add,
		id
	}
}

export const remove = (id) => {
	return {
		type: actions.Remove,
		id
	}
}

export const changeCnt = (id, cnt) => {
	return {
		type: actions.Change,
		id,
		cnt
	}
}

export const inCart = (id) => {
	return {
		type: actions.InCart,
		id
	}
}