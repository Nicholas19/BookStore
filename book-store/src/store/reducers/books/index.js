let initialState = {
  items: [],
  productsIsLoad: false,
  error: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOKS_LOAD":
      return { ...state, productsIsLoad: true };
    case "BOOKS_LOAD_SUCCESS":
      return { ...state, productsIsLoad: false, items: action.payload };
    case "BOOKS_LOAD_FAILED":
      return { ...state, productsIsLoad: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
