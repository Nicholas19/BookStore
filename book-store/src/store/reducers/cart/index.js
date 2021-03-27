import actions from 'store/actions/actionTypes';

const initialState = {
	items: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.Add:
			return { ...state, items: [...state.items, action.id] };
		case actions.Remove:
			return { ...state, items: state.items.filter(id => id !== action.id) };
		default:
			return state;
	}
};

export default reducer;