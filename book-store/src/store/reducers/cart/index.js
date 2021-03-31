import actions from 'store/actions/actionTypes';

const initialState = {
	items: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.Add:
			return { ...state, items: [...state.items, action.payload] };
		case actions.Remove:
			return { ...state, items: state.items.filter(id => id !== action.payload) };
		default:
			return state;
	}
};

export default reducer;