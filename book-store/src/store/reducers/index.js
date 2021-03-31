import { combineReducers } from 'redux';
import books from './books';
import cart from './cart';
import order from './order';

export default combineReducers ({
	books,
	cart,
	order
});