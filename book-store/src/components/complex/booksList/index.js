import React from 'react';
import { connect } from 'react-redux';
import Book from './../book';
import actions from 'store/actions';

const BooksList = ((props) => {
	const books = props.itemsFiltered.map((item) => {
		return (
			<Book
				key={item.id}
				id={item.id}
				title={item.title}
				cover={item.cover}
				price={item.price}
				onAdd={props.onAdd}			
				onRemove={props.onRemove}			
			/>
		)
	});

	return (
		<div className="row">
			{books}
		</div>

	);
});

const mapStateToProps = (state) => {
	// console.log("state:", state);
	return {
		items: state.books.items,
		itemsFiltered: state.books.itemsFiltered
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
			onAdd: (id) => dispatch(actions.cart.add(id)),
			onRemove: (id, cnt) => dispatch(actions.cart.remove(id)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);