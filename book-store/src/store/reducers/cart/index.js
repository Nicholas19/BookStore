import actions from 'store/actions/actionTypes';

let initialState = {
  items: [],
};

const add = (state, id) => {
	// console.log(id);
	if(!state.items.some((item) => item.id === id)){
		let items = [...state.items];
		items.push(id);
	
		console.log(items);
		
		return {
			...state,
			items
		}
	}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.Add:
      return add(state, action.id);
    default:
      return state;
  }
};

export default reducer;