import actions from 'store/actions/actionTypes';

const initialState = {
	formData: {
		name: {
			value: '',
			label: 'Name',
			pattern: /^[aA-zZ ]{2,}$/,
			errorText: 'Латинские символы, не менее двух'
		},
		phone: {
			value: '',
			label: 'Phone',
			pattern: /^[0-9]{7,15}$/,
			errorText: 'От 7 до 15 цифр'
		},
		email: {
			value: '',
			label: 'Email',
			pattern: /^.+@.+$/,
			errorText: 'Собака'
		}
	},

};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.FormChange:
			const formData = {...state.formData};
			
			for(const key in action.payload){
				formData[key].value = action.payload[key];
			}

			return { ...state.formData, formData };
		default:
			return state;
	}
};

export default reducer;