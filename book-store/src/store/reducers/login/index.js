import actions from 'store/actions/actionTypes';

const initialState = {
    formData: [
        {
            value: '',
            label: 'User',
            pattern: /^[aA-zZ ]{3,}$/,
            error: 'Латинские символы, не менее трёх'
        },
        {
            value: '',
            label: 'Password',
            pattern: /^[a-zA-Z0-9]{4,}$/,
            error: 'Пароль должен содержать только буквы и цифры (минимум 6 символов)'
        },
        {
            label: 'Remember',
            value: false
        }
    ],
    users: [
        {
            userName: 'User',
            password: 'user'
        },
        {
            userName: 'Admin',
            password: 'admin'
        }
    ],
    User: null


};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.Login:
            const formData = [...state.formData];
            Object.entries(action.payload).map(([key, value]) => {
                let field = formData.find(obj => obj.label === key);
                field.value = value;
            });

            return { ...state, formData };
        case actions.GetUser:
            console.log(action.payload);
            return { ...state, User: action.payload };
        default:
            return state;
    }
};

export default reducer;